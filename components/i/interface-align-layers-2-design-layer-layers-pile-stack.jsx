import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kghzxxa0p.css';
import '../../css/g/ghf3lkbyx.css';
import '../../css/d/duw6ubzmi.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="kghzxxa0p"/><path class="ghf3lkbyx"/><path class="duw6ubzmi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-align-layers-2-design-layer-layers-pile-stack"} {...others} />);
}

export default Component;
