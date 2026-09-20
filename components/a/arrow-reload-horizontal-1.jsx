import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/k3i7azb7p.css';
import '../../css/a/a1zpv_jya.css';
import '../../css/m/mbds8lbzx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="k3i7azb7p"/><path class="a1zpv_jya"/><path class="mbds8lbzx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:arrow-reload-horizontal-1"} {...others} />);
}

export default Component;
