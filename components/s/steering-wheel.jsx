import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nsov89b_p.css';
import '../../css/l/lfmd7-bxn.css';
import '../../css/q/qf4hhzbgm.css';
import '../../css/n/n8z_6xjrk.css';
import '../../css/g/gx41x4n1f.css';
import '../../css/g/g2adu1mnj.css';
import '../../css/j/jciskbcqa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="nsov89b_p"/><path class="lfmd7-bxn"/><path class="qf4hhzbgm"/><path class="n8z_6xjrk"/><path class="gx41x4n1f"/><path clip-rule="evenodd" class="g2adu1mnj"/><path class="jciskbcqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:steering-wheel"} {...others} />);
}

export default Component;
