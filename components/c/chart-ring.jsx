import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/w/wz8yvusof.css';
import '../../css/p/pkd1eol3g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="wz8yvusof"/><path class="pkd1eol3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:chart-ring"} {...others} />);
}

export default Component;
