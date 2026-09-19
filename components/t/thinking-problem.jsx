import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/um015_bve.css';
import '../../css/r/rs6xfdeqy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="um015_bve"/><path class="rs6xfdeqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:thinking-problem"} {...others} />);
}

export default Component;
