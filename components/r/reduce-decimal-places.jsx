import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/mpaozksdi.css';
import '../../css/w/wdiqrzjxb.css';
import '../../css/e/erq7bzoxe.css';
import '../../css/k/k-w74vgau.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="mpaozksdi"/><path class="wdiqrzjxb"/><path class="erq7bzoxe"/><path class="k-w74vgau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:reduce-decimal-places"} {...others} />);
}

export default Component;
