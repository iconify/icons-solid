import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/t/tsx5-nsww.css';
import '../../css/k/kydbn2b6c.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="tsx5-nsww"/><path class="kydbn2b6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:tv-stand-2"} {...others} />);
}

export default Component;
