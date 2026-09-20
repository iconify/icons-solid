import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kepg9yfyc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kepg9yfyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:thumbs-down"} {...others} />);
}

export default Component;
