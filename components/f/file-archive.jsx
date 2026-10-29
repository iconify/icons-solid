import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fd5_dnbey.css';
import '../../css/j/jjadg4b5m.css';
import '../../css/o/oz0bnwbnj.css';
import '../../css/s/s4lr_bcgp.css';
import '../../css/o/o_dahib7i.css';
import '../../css/w/wt6nnybjk.css';
import '../../css/d/dz-w9_b8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="fd5_dnbey wm-shadow"/><path class="jjadg4b5m"/><path class="oz0bnwbnj"/><path class="s4lr_bcgp"/><path class="o_dahib7i wm-shine"/><path class="wm-deco wt6nnybjk"/><path class="dz-w9_b8f wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:file-archive"} {...others} />);
}

export default Component;
