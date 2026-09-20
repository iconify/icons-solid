import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/me5ba80yv.css';
import '../../css/v/v0x7igbyg.css';
import '../../css/s/sp3kom_ya.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="me5ba80yv"><path class="v0x7igbyg"/><path class="sp3kom_ya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:ampersand"} {...others} />);
}

export default Component;
