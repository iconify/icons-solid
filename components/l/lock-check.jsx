import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/t/t122zlbie.css';
import '../../css/m/m3m1-kbjt.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="t122zlbie"/><path class="m3m1-kbjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:lock-check"} {...others} />);
}

export default Component;
