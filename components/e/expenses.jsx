import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/dibgq69pv.css';
import '../../css/j/jn7i-l9mm.css';
import '../../css/n/nooy9jbyb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="dibgq69pv"/><path class="jn7i-l9mm"/><path class="nooy9jbyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:expenses"} {...others} />);
}

export default Component;
