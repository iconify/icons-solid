import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tnfl38b_n.css';
import '../../css/c/cpkh16lmf.css';
import '../../css/r/r2v1z7b5b.css';
import '../../css/y/ym90cebqs.css';
import '../../css/u/u5sq7obba.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="tnfl38b_n wm-shadow"/><path class="cpkh16lmf wm-shadow"/><path class="r2v1z7b5b"/><path class="ym90cebqs"/><path class="u5sq7obba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:printer"} {...others} />);
}

export default Component;
