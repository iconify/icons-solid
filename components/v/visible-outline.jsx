import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/c/crcu86iyq.css';
import '../../css/d/dcgw77bis.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><ellipse class="crcu86iyq"/><circle class="dcgw77bis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:visible-outline"} {...others} />);
}

export default Component;
