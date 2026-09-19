import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/am770-rkn.css';
import '../../css/s/s0wimxb5x.css';
import '../../css/j/jt6io-b3f.css';
import '../../css/i/i_bd-bc3e.css';
import '../../css/f/fveoaacpt.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="am770-rkn"/><path class="s0wimxb5x"/><circle class="jt6io-b3f"/><circle class="i_bd-bc3e"/><path class="fveoaacpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:angry"} {...others} />);
}

export default Component;
