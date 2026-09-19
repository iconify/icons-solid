import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/c/chcorqbvh.css';
import '../../css/s/s0s2nybgx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="chcorqbvh"/><path class="s0s2nybgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:laptop-one"} {...others} />);
}

export default Component;
