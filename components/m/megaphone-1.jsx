import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jffk_1b6w.css';
import '../../css/m/me8iec82z.css';
import '../../css/g/gex7cbb8y.css';
import '../../css/g/g4rn1iqkk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jffk_1b6w"/><path class="me8iec82z"/><path class="gex7cbb8y"/><path class="g4rn1iqkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:megaphone-1"} {...others} />);
}

export default Component;
