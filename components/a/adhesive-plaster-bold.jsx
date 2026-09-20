import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hnryw_gru.css';
import '../../css/h/ht04aqbne.css';
import '../../css/x/xzrrjnu7k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hnryw_gru"/><path clip-rule="evenodd" class="ht04aqbne"/><path class="xzrrjnu7k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:adhesive-plaster-bold"} {...others} />);
}

export default Component;
