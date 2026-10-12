import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mem9vebuf.css';
import '../../css/k/k_3pzibfw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mem9vebuf"/><path class="k_3pzibfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:layers-down"} {...others} />);
}

export default Component;
