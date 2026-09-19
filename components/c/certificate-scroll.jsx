import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ygfnanrxm.css';
import '../../css/v/v94p4ebmm.css';
import '../../css/u/ucoipt0um.css';
import '../../css/h/hb6tmrgyf.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ygfnanrxm"/><path class="v94p4ebmm"/><path clip-rule="evenodd" class="ucoipt0um"/><path clip-rule="evenodd" class="hb6tmrgyf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:certificate-scroll"} {...others} />);
}

export default Component;
