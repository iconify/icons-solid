import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/aipjkgbmn.css';
import '../../css/p/ptacnfbdj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="aipjkgbmn"/><path class="ptacnfbdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:xiaodu"} {...others} />);
}

export default Component;
