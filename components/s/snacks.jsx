import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/l/l8_9qmblm.css';
import '../../css/p/pu2dc9b4p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="l8_9qmblm"/><path class="pu2dc9b4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:snacks"} {...others} />);
}

export default Component;
