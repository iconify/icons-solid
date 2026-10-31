import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/e5l2t5bnm.css';
import '../../css/k/ka162yg0t.css';
import '../../css/p/pwqhvxb2x.css';
import '../../css/z/zbgq8xytk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="e5l2t5bnm wm-shadow"/><path class="ka162yg0t wm-shadow"/><path class="pwqhvxb2x"/><path class="zbgq8xytk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:regex"} {...others} />);
}

export default Component;
