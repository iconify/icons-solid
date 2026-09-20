import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/i/i7pe15bxd.css';
import '../../css/e/ejpimf5ps.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="i7pe15bxd"/><path class="ejpimf5ps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:water-can-2"} {...others} />);
}

export default Component;
