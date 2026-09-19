import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/a/agp8z31zm.css';
import '../../css/g/g1c1xhbvc.css';
import '../../css/z/zcsny6b6r.css';
import '../../css/f/flf2r8myx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="agp8z31zm"/><path class="g1c1xhbvc"/><path class="zcsny6b6r"/><path class="flf2r8myx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:circle-two-line"} {...others} />);
}

export default Component;
