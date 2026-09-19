import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/k/k0rtnybof.css';
import '../../css/i/i0l3zohuw.css';
import '../../css/l/l5j_gjbvp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="k0rtnybof"/><path class="i0l3zohuw"/><path class="l5j_gjbvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:replay-music"} {...others} />);
}

export default Component;
