import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xzfx_kbpp.css';
import '../../css/q/qn5kscbsg.css';
import '../../css/h/h_m7exbzz.css';
import '../../css/u/ugjqc-bch.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xzfx_kbpp"/><path class="qn5kscbsg"/><path clip-rule="evenodd" class="h_m7exbzz"/><path class="ugjqc-bch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:tree"} {...others} />);
}

export default Component;
