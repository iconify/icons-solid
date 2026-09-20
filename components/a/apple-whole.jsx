import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5sn6rijz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l5sn6rijz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:apple-whole"} {...others} />);
}

export default Component;
