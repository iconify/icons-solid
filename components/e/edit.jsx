import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/b/bwayl0bfz.css';
import '../../css/z/zfyobdlwe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="bwayl0bfz"/><path class="zfyobdlwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:edit"} {...others} />);
}

export default Component;
