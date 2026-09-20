import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kj17n185i.css';
import '../../css/r/rbay0dfvj.css';
import '../../css/j/j2g_rlbaj.css';
import '../../css/v/vhnk7f-oc.css';
import '../../css/t/tlhd78brd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kj17n185i"/><path class="rbay0dfvj"/><path class="j2g_rlbaj"/><path class="vhnk7f-oc"/><path class="tlhd78brd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:emoji-angry-face-horns-demon"} {...others} />);
}

export default Component;
