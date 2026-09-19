import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/j1-9tgbck.css';
import '../../css/u/usog9mbxw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="j1-9tgbck"/><path class="usog9mbxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:handwashing"} {...others} />);
}

export default Component;
