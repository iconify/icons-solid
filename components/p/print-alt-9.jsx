import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/elmmu_bwy.css';
import '../../css/h/h5lxpqoun.css';
import '../../css/l/lcxhbtsdw.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="elmmu_bwy"/><path class="h5lxpqoun"/><path class="lcxhbtsdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:print-alt-9"} {...others} />);
}

export default Component;
