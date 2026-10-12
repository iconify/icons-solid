import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/twonex54g.css';
import '../../css/n/n2l517b2s.css';
import '../../css/t/tb3qgualm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-45 31.81 1.72)scale(1 -1)" class="twonex54g"/><rect transform="rotate(-45 31.81 1.72)scale(1 -1)" class="n2l517b2s"/><path class="tb3qgualm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ruler"} {...others} />);
}

export default Component;
