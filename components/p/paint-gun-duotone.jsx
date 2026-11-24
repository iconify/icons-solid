import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bzuew1bbt.css';
import '../../css/i/i6u_vsbbj.css';
import '../../css/t/thhkosbnf.css';
import '../../css/l/lrv63vbhk.css';
import '../../css/h/hz-aqpu0t.css';
import '../../css/d/dezlgd06k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bzuew1bbt"/><path class="i6u_vsbbj"/><path class="thhkosbnf"/><path class="lrv63vbhk"/><path class="hz-aqpu0t"/><path class="dezlgd06k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:paint-gun-duotone"} {...others} />);
}

export default Component;
