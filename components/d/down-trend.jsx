import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/cg0pfosfz.css';
import '../../css/a/a0j3wxb9s.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="cg0pfosfz"/><path class="a0j3wxb9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:down-trend"} {...others} />);
}

export default Component;
