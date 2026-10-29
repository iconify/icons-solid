import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/pkgr03atr.css';
import '../../css/m/m1y1q9lxd.css';
import '../../css/j/jk_3i_j5p.css';
import '../../css/r/ru_qwrojh.css';
import '../../css/o/oz9fb5biz.css';
import '../../css/z/zy5wd1-0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="pkgr03atr wm-shadow"/><path class="m1y1q9lxd"/><path class="jk_3i_j5p"/><path class="ru_qwrojh"/><path class="oz9fb5biz wm-shine"/><path class="wm-deco zy5wd1-0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:surprised"} {...others} />);
}

export default Component;
