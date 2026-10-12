import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zfjc_4b_l.css';
import '../../css/r/rp79n_-hl.css';
import '../../css/w/ww8126b4z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zfjc_4b_l"/><path class="rp79n_-hl"/><path class="ww8126b4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-link"} {...others} />);
}

export default Component;
