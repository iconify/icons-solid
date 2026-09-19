import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d3-bn590g.css';
import '../../css/a/at7emfbkj.css';
import '../../css/n/nktak1bsx.css';
import '../../css/a/abfkjcbtp.css';
import '../../css/a/a2-nbnbfp.css';
import '../../css/g/gszs2_bhl.css';
import '../../css/u/ugvngly9b.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="d3-bn590g"/><path class="at7emfbkj"/><path class="nktak1bsx"/><path class="abfkjcbtp"/><path class="a2-nbnbfp"/><path class="gszs2_bhl"/><path class="ugvngly9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:film-projector"} {...others} />);
}

export default Component;
