import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lxh981b4t.css';
import '../../css/j/j2709-b7j.css';
import '../../css/x/x21do37cg.css';
import '../../css/m/m41pybbrj.css';
import '../../css/p/pn0r5phbp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lxh981b4t"/><path class="j2709-b7j"/><path class="x21do37cg"/><path class="m41pybbrj"/><path class="pn0r5phbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:video-player-1"} {...others} />);
}

export default Component;
