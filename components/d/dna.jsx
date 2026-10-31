import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/l/l09831bjg.css';
import '../../css/o/ou7halb-d.css';
import '../../css/o/o_jlcckqq.css';
import '../../css/w/wrkbx9bny.css';
import '../../css/u/ugzrm7bka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="l09831bjg"/><path class="ou7halb-d wm-shine"/><path class="o_jlcckqq wm-k"/><path class="wm-a wrkbx9bny"/><path class="ugzrm7bka wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:dna"} {...others} />);
}

export default Component;
