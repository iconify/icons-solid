import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/pkgr03atr.css';
import '../../css/m/m1y1q9lxd.css';
import '../../css/e/eeq63qngk.css';
import '../../css/g/gxlu1nb4u.css';
import '../../css/o/oz9fb5biz.css';
import '../../css/f/fpr348e2o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="pkgr03atr wm-shadow"/><path class="m1y1q9lxd"/><path class="eeq63qngk"/><path class="gxlu1nb4u"/><path class="oz9fb5biz wm-shine"/><path class="fpr348e2o wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:clock"} {...others} />);
}

export default Component;
