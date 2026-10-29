import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/kmwezmmkk.css';
import '../../css/h/hil2mo0ta.css';
import '../../css/p/pval7vaxz.css';
import '../../css/r/r_12yrbap.css';
import '../../css/d/dmhu3mm6c.css';
import '../../css/b/b4m_jnjmw.css';
import '../../css/w/wmjt_7b4c.css';
import '../../css/r/r5kqetb6c.css';
import '../../css/m/m1j8qrbta.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="kmwezmmkk wm-shadow"/><path class="hil2mo0ta"/><path class="pval7vaxz"/><path class="r_12yrbap"/><path class="dmhu3mm6c wm-shine"/><path class="b4m_jnjmw wm-s"/><path class="wm-s wmjt_7b4c"/><path class="r5kqetb6c wm-s"/><path class="m1j8qrbta wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:spell-check"} {...others} />);
}

export default Component;
