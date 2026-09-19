import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s3-ugzb7u.css';
import '../../css/c/c43ks2b_o.css';
import '../../css/j/j2phjrbki.css';
import '../../css/d/d_mpeb16v.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="s3-ugzb7u"/><path clip-rule="evenodd" class="c43ks2b_o"/><path class="j2phjrbki"/><path clip-rule="evenodd" class="d_mpeb16v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:center-focus-strong-outline"} {...others} />);
}

export default Component;
