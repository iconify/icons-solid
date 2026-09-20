import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uya7-zeom.css';
import '../../css/k/kxzfxib7s.css';
import '../../css/f/f-wy3n-mo.css';
import '../../css/w/ww0o_lbhh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uya7-zeom"/><path class="kxzfxib7s"/><path class="f-wy3n-mo"/><path class="ww0o_lbhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:computer-chip-32"} {...others} />);
}

export default Component;
