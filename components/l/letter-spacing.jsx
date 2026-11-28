import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/arta7fmsj.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="arta7fmsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:letter-spacing"} {...others} />);
}

export default Component;
