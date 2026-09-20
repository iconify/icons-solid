import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mi-b4ho1m.css';
import '../../css/f/fg2fcbbfw.css';
import '../../css/t/tpml8eb-g.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="mi-b4ho1m"/><path clip-rule="evenodd" class="fg2fcbbfw"/><path class="tpml8eb-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:ok-hand"} {...others} />);
}

export default Component;
