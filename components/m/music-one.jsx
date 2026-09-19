import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/q/q7l4al2od.css';
import '../../css/v/vujmveuaw.css';
import '../../css/z/z7piywbdq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="q7l4al2od"/><path class="vujmveuaw"/><path clip-rule="evenodd" class="z7piywbdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:music-one"} {...others} />);
}

export default Component;
