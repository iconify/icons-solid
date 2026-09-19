import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/a/arbmb7b9s.css';
import '../../css/t/tx6culb0f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="arbmb7b9s"/><path class="tx6culb0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:screwdriver"} {...others} />);
}

export default Component;
