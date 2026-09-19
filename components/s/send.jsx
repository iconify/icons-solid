import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/h/hjc4nfbri.css';
import '../../css/l/l4mmbkb6p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="hjc4nfbri"/><path class="l4mmbkb6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:send"} {...others} />);
}

export default Component;
