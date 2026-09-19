import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/j8xw-pqbp.css';
import '../../css/z/zrdtk9b1x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="j8xw-pqbp"/><path class="zrdtk9b1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:corner-right-down"} {...others} />);
}

export default Component;
