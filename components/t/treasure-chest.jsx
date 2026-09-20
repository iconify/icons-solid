import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k68qlacvr.css';
import '../../css/v/v72nx-uko.css';
import '../../css/c/cjtg6uzwu.css';
import '../../css/f/faeg57jly.css';
import '../../css/w/wwescp7rx.css';
import '../../css/f/fa4onccze.css';
import '../../css/c/c0et8ibsx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k68qlacvr"/><path class="v72nx-uko"/><path class="cjtg6uzwu"/><path class="faeg57jly"/><path class="wwescp7rx"/><path class="fa4onccze"/><path class="c0et8ibsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:treasure-chest"} {...others} />);
}

export default Component;
