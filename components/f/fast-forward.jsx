import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t064iobsf.css';
import '../../css/u/ujwwjib6j.css';
import '../../css/y/ysuewmbkn.css';
import '../../css/m/m_akgybho.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="t064iobsf wm-shadow"/><path class="ujwwjib6j"/><path class="ysuewmbkn"/><path class="m_akgybho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:fast-forward"} {...others} />);
}

export default Component;
