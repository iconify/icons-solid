import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nibn50kqx.css';
import '../../css/p/pdz-36b4z.css';
import '../../css/u/umfxv1jgl.css';
import '../../css/s/s_fnwpyrw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="nibn50kqx"/><path class="pdz-36b4z"/><path class="umfxv1jgl"/><path class="s_fnwpyrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:potted-flower-tulip"} {...others} />);
}

export default Component;
