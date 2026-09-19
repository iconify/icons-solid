import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/u/u4qqi3ylc.css';
import '../../css/z/z7cd3vb_z.css';
import '../../css/s/s0k85obfc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="u4qqi3ylc"/><path class="z7cd3vb_z"/><path class="s0k85obfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:alignment-bottom-right"} {...others} />);
}

export default Component;
