import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xtis6_vbr.css';
import '../../css/s/sy99x-beb.css';
import '../../css/y/ymt-x2xna.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xtis6_vbr"/><path class="sy99x-beb"/><path class="ymt-x2xna"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:smartphone-cutout-print"} {...others} />);
}

export default Component;
