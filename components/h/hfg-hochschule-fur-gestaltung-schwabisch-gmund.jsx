import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcgf3t33r.css';
import '../../css/b/bqrr8ccgv.css';
import '../../css/e/etr_jpx0n.css';
import '../../css/u/u50z-bcqw.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/z/zy17_f_tz.css';
import '../../css/l/lod_8pbnx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="kcgf3t33r"/><path class="bqrr8ccgv"/><path class="etr_jpx0n"/><path class="u50z-bcqw"/><g class="jn8qy4bru"><path class="zy17_f_tz"/><path class="lod_8pbnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hfg-hochschule-fur-gestaltung-schwabisch-gmund"} {...others} />);
}

export default Component;
