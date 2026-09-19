import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/sk4_933ij.css';
import '../../css/l/l230f71as.css';
import '../../css/o/opswthbui.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><rect class="sk4_933ij"/><path class="l230f71as"/><path class="opswthbui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:gift-outline"} {...others} />);
}

export default Component;
