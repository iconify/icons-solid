import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/ujc2pciob.css';
import '../../css/f/fbyos_bmx.css';
import '../../css/r/rfzuyqbhc.css';
import '../../css/l/lhb_pyb5s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ujc2pciob wm-shadow"/><path class="fbyos_bmx wm-shadow"/><path class="rfzuyqbhc"/><path class="lhb_pyb5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:align-bottom"} {...others} />);
}

export default Component;
