import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dvxjmchgi.css';
import '../../css/m/mhs5utjyz.css';
import '../../css/r/rn1lnjbue.css';
import '../../css/p/p8f18sbqf.css';
import '../../css/b/bhqb71rfn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dvxjmchgi"/><path class="mhs5utjyz"/><path class="rn1lnjbue"/><path class="p8f18sbqf"/><path class="bhqb71rfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:lock-shield"} {...others} />);
}

export default Component;
