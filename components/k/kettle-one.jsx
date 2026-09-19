import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/zbsa-ujvj.css';
import '../../css/e/elnthojgr.css';
import '../../css/p/pcfefwb7r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="zbsa-ujvj"/><path class="elnthojgr"/><path class="pcfefwb7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:kettle-one"} {...others} />);
}

export default Component;
