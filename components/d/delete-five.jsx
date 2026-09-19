import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/a/a0w1mqrvs.css';
import '../../css/o/ocg2edccm.css';
import '../../css/x/x4rdw3dgg.css';
import '../../css/g/gp03omb9u.css';
import '../../css/x/xu6ubfb5d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="a0w1mqrvs"/><path class="ocg2edccm"/><path class="x4rdw3dgg"/><path class="gp03omb9u"/><path class="xu6ubfb5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:delete-five"} {...others} />);
}

export default Component;
