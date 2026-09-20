import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbmqdzbzc.css';
import '../../css/f/f61c91d7m.css';
import '../../css/e/e5wiw95_c.css';
import '../../css/s/s6kgnok9r.css';
import '../../css/b/bt_cc470g.css';
import '../../css/u/ust67rb8l.css';
import '../../css/z/z04drlb1l.css';
import '../../css/f/fq0y910ro.css';
import '../../css/v/vbpwtd-ti.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="bbmqdzbzc"/><path class="f61c91d7m"/><path class="e5wiw95_c"/><path class="s6kgnok9r"/><path class="bt_cc470g"/><path class="ust67rb8l"/><g class="z04drlb1l"><path class="fq0y910ro"/><path class="vbpwtd-ti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:pomegranate"} {...others} />);
}

export default Component;
