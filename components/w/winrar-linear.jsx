import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/le-vwfb-i.css';
import '../../css/w/wq6ndfbyz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="le-vwfb-i"/><path class="wq6ndfbyz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:winrar-linear"} {...others} />);
}

export default Component;
