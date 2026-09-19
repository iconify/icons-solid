import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z1p5pfbgn.css';
import '../../css/l/lcd2nmarj.css';
import '../../css/x/xhce_hbyg.css';
import '../../css/h/hamkaq0zb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="z1p5pfbgn"/><path class="lcd2nmarj"/><path class="xhce_hbyg"/><path class="hamkaq0zb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mouse-11"} {...others} />);
}

export default Component;
