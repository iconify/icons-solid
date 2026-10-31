import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/u/u3wn5_whc.css';
import '../../css/b/bmk7ewkey.css';
import '../../css/k/kl2f2f0tw.css';
import '../../css/f/fm32n2byj.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="u3wn5_whc"/><path class="bmk7ewkey wm-shine"/><path class="kl2f2f0tw wm-k"/><path class="fm32n2byj wm-a"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:fish"} {...others} />);
}

export default Component;
