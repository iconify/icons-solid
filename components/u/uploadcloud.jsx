import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtr2jecan.css';
import '../../css/h/hom3--61e.css';
import '../../css/y/yfls4paib.css';

const viewBox = {"width":16,"height":14};
const content = `<path class="wtr2jecan"/><path class="hom3--61e"/><path class="yfls4paib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:uploadcloud"} {...others} />);
}

export default Component;
