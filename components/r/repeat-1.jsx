import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ajbkxkbsl.css';
import '../../css/w/wppg5qb7z.css';
import '../../css/e/epxhzobba.css';
import '../../css/p/p5fm_-b9g.css';
import '../../css/o/o0nae4b9g.css';
import '../../css/h/h70wkfbln.css';
import '../../css/u/u-lgx84ga.css';
import '../../css/v/vou2zznro.css';
import '../../css/x/x7hf-6bfw.css';
import '../../css/m/m_lhckbec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ajbkxkbsl wm-shadow"/><path class="wm-k wppg5qb7z"/><path class="epxhzobba wm-k"/><path class="p5fm_-b9g wm-k"/><path class="o0nae4b9g wm-k"/><path class="h70wkfbln wm-shine"/><path class="u-lgx84ga wm-s"/><path class="vou2zznro wm-s"/><path class="wm-s x7hf-6bfw"/><path class="m_lhckbec wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:repeat-1"} {...others} />);
}

export default Component;
