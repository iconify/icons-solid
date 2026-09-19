import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/r/r2704obmd.css';
import '../../css/c/crk1s8bim.css';
import '../../css/k/k679bvbzb.css';
import '../../css/z/zvmpbqbdd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="r2704obmd"/><path class="crk1s8bim"/><path class="k679bvbzb"/><path class="zvmpbqbdd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:add-music"} {...others} />);
}

export default Component;
