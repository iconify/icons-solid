import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/l/llx-aib5r.css';
import '../../css/u/u989eo7xe.css';
import '../../css/l/lcbu0h84j.css';
import '../../css/j/jdjuicczm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="llx-aib5r"/><path class="u989eo7xe"/><path class="lcbu0h84j"/><circle class="jdjuicczm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:health-products"} {...others} />);
}

export default Component;
