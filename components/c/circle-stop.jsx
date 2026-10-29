import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/pkgr03atr.css';
import '../../css/m/m1y1q9lxd.css';
import '../../css/b/bqv9yvbep.css';
import '../../css/h/h6v9lvngk.css';
import '../../css/o/oz9fb5biz.css';
import '../../css/m/mukehqbda.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="pkgr03atr wm-shadow"/><path class="m1y1q9lxd"/><path class="bqv9yvbep"/><path class="h6v9lvngk"/><path class="oz9fb5biz wm-shine"/><path class="mukehqbda wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:circle-stop"} {...others} />);
}

export default Component;
