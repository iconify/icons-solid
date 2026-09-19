import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jsnid3b6z.css';
import '../../css/n/nnfylitxy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="jsnid3b6z"/><path class="nnfylitxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:afro-pick"} {...others} />);
}

export default Component;
