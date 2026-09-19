import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/uq87yok8l.css';
import '../../css/n/n0ibv68fm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="uq87yok8l"/><path class="n0ibv68fm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:halo"} {...others} />);
}

export default Component;
