import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdspv00fi.css';
import '../../css/a/ajymxmbye.css';
import '../../css/h/hu1lbkrbg.css';
import '../../css/r/rix36nbaf.css';

const viewBox = {"width":74.76,"height":86.64,"left":707.2,"top":510.7};
const content = `<path class="wdspv00fi"/><path class="ajymxmbye"/><path class="hu1lbkrbg"/><path class="rix36nbaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:glitchtip"} {...others} />);
}

export default Component;
