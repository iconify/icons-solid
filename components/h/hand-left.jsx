import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/h/hgjak_-qz.css';
import '../../css/d/deeocfldx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="hgjak_-qz"/><path clip-rule="evenodd" class="deeocfldx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hand-left"} {...others} />);
}

export default Component;
