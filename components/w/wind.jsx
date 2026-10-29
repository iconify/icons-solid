import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/e/ejhx8mbpf.css';
import '../../css/k/kvx8aqbyf.css';
import '../../css/r/rfybl67yi.css';
import '../../css/p/puyb7fbqj.css';
import '../../css/k/k6_juwbfm.css';
import '../../css/l/lm82-xb1a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ejhx8mbpf wm-shadow"/><path class="kvx8aqbyf"/><path class="rfybl67yi"/><path class="puyb7fbqj"/><path class="k6_juwbfm wm-shine"/><path class="lm82-xb1a wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:wind"} {...others} />);
}

export default Component;
