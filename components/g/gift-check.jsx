import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gqwtl1sfl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gqwtl1sfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:gift-check"} {...others} />);
}

export default Component;
