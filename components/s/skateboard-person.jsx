import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s2f_bdb6f.css';
import '../../css/t/took1svyo.css';
import '../../css/q/q19_43bga.css';
import '../../css/q/qe9vangyv.css';
import '../../css/k/kbgytebxp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s2f_bdb6f"/><path class="took1svyo"/><path class="q19_43bga"/><path class="qe9vangyv"/><path class="kbgytebxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:skateboard-person"} {...others} />);
}

export default Component;
