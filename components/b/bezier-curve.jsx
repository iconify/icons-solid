import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xs28lbcae.css';
import '../../css/a/a9qgo497e.css';
import '../../css/b/b7lc0-bdo.css';
import '../../css/l/lbzqinjha.css';
import '../../css/d/d-kk_6ndx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="xs28lbcae"/><path class="a9qgo497e"/><path class="b7lc0-bdo"/><circle class="lbzqinjha"/><circle class="d-kk_6ndx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:bezier-curve"} {...others} />);
}

export default Component;
