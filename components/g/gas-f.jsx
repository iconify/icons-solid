import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lrhweeb4l.css';
import '../../css/b/b-kynvb0a.css';
import '../../css/k/kd5xlkuka.css';
import '../../css/k/kiatm_2ao.css';
import '../../css/z/zp6lkacjk.css';
import '../../css/g/gna15-0st.css';
import '../../css/d/dyjp3hbgo.css';
import '../../css/g/gg4c-c-jg.css';
import '../../css/c/clqxcgtuy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lrhweeb4l"/><path class="b-kynvb0a"/><path class="kd5xlkuka"/><path class="kiatm_2ao"/><path class="zp6lkacjk"/><path class="gna15-0st"/><path class="dyjp3hbgo"/><path class="gg4c-c-jg"/><path class="clqxcgtuy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:gas-f"} {...others} />);
}

export default Component;
