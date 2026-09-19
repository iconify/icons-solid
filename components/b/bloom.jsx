import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/mi53ns-dt.css';
import '../../css/u/ufllbwb-a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="mi53ns-dt"/><path class="ufllbwb-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:bloom"} {...others} />);
}

export default Component;
