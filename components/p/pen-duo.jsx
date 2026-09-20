import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m0ixkvs5j.css';
import '../../css/g/g0mtsebro.css';
import '../../css/j/j90e0-bnj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="m0ixkvs5j"/><path class="g0mtsebro"/><path class="j90e0-bnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:pen-duo"} {...others} />);
}

export default Component;
