import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/p-w2twjbi.css';
import '../../css/m/mxqp5wvsi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="p-w2twjbi"/><path class="mxqp5wvsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:escalators"} {...others} />);
}

export default Component;
