import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/y/yziyf7bub.css';
import '../../css/o/oeh3u8vmc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="yziyf7bub"/><path class="oeh3u8vmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:full-screen-play"} {...others} />);
}

export default Component;
