import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sqf6xz70z.css';
import '../../css/l/l27639bbw.css';
import '../../css/q/qgedusuli.css';
import '../../css/c/c29hiodty.css';
import '../../css/m/m6nlbsbsd.css';
import '../../css/b/ba-8qqbfp.css';
import '../../css/j/j3riuj0hp.css';

const viewBox = {"width":300,"height":173};
const content = `<g class="bi12bsetm"><path class="sqf6xz70z"/><path class="l27639bbw"/><path class="qgedusuli"/><path class="c29hiodty"/><path class="m6nlbsbsd"/><path class="ba-8qqbfp"/><path class="j3riuj0hp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ir"} {...others} />);
}

export default Component;
