import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/t/t4_2vib2f.css';
import '../../css/x/xpls8jpku.css';
import '../../css/p/ps9f--bsc.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="t4_2vib2f"/><path class="xpls8jpku"/><path class="ps9f--bsc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:car-lifter"} {...others} />);
}

export default Component;
