import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/ee_pu_b1y.css';
import '../../css/q/q6m95sk9a.css';
import '../../css/z/z0qudebpo.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="ee_pu_b1y"/><path class="q6m95sk9a"/><path class="z0qudebpo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:gold-medal-6"} {...others} />);
}

export default Component;
