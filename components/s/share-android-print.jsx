import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rqp_fpfgv.css';
import '../../css/h/hku-2nb6r.css';
import '../../css/n/ne9k0gz5r.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rqp_fpfgv"/><path clip-rule="evenodd" class="hku-2nb6r"/><path class="ne9k0gz5r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:share-android-print"} {...others} />);
}

export default Component;
