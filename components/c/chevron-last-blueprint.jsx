import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/ih1tp_bsv.css';
import '../../css/k/ky_2sbg2r.css';
import '../../css/p/pchpq8loe.css';
import '../../css/z/zhjtmfbrj.css';
import '../../css/b/b4r7z9b8r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ih1tp_bsv wm-deco"/><path class="ky_2sbg2r wm-deco"/><path class="pchpq8loe wm-k"/><path class="wm-a zhjtmfbrj"/><path class="b4r7z9b8r wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevron-last-blueprint"} {...others} />);
}

export default Component;
