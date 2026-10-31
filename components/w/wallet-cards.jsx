import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sv9i97bwc.css';
import '../../css/i/imtatubmg.css';
import '../../css/u/umi1jwbkq.css';
import '../../css/j/j8z3xj6tm.css';
import '../../css/k/k5es8f68i.css';
import '../../css/f/falp97w2x.css';
import '../../css/b/bnm54lboy.css';
import '../../css/s/s8a1s1b-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="sv9i97bwc"/><path class="imtatubmg"/><path class="umi1jwbkq wm-shine"/><path class="j8z3xj6tm wm-k"/><path class="k5es8f68i wm-a"/><path class="falp97w2x"/><path class="bnm54lboy"/><path class="s8a1s1b-n wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:wallet-cards"} {...others} />);
}

export default Component;
