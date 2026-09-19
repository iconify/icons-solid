import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ykzy0pbpg.css';
import '../../css/s/seu091v_p.css';
import '../../css/o/o4dbx8u_m.css';
import '../../css/k/ko4cx_iqs.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ykzy0pbpg"/><path class="seu091v_p"/><path class="o4dbx8u_m"/><path class="ko4cx_iqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:users-duo"} {...others} />);
}

export default Component;
