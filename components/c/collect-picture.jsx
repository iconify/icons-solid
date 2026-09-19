import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/digx7rg6r.css';
import '../../css/n/ncl-bp61j.css';
import '../../css/k/k4liqx2ro.css';
import '../../css/t/tqg75m5ij.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="digx7rg6r"/><path class="ncl-bp61j"/><path class="k4liqx2ro"/><path class="tqg75m5ij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:collect-picture"} {...others} />);
}

export default Component;
