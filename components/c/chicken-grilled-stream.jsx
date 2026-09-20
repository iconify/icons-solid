import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mz510gb_n.css';
import '../../css/c/cnnx4mbny.css';
import '../../css/e/e-zbt6gnj.css';
import '../../css/g/gtat3mbqo.css';
import '../../css/x/xk66o2bke.css';
import '../../css/r/r9t_69bhp.css';
import '../../css/m/m0mx6sb5f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mz510gb_n"/><path class="cnnx4mbny"/><path class="e-zbt6gnj"/><path class="gtat3mbqo"/><path class="xk66o2bke"/><path class="r9t_69bhp"/><path class="m0mx6sb5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:chicken-grilled-stream"} {...others} />);
}

export default Component;
