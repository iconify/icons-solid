import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/me5ba80yv.css';
import '../../css/z/zygv4yjok.css';
import '../../css/v/vajc68baa.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="me5ba80yv"><path class="zygv4yjok"/><path class="vajc68baa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:exit-full-screen"} {...others} />);
}

export default Component;
