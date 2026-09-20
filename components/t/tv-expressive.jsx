import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a_z8dvb4u.css';
import '../../css/w/w6pv-ohjx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="a_z8dvb4u"/><path clip-rule="evenodd" class="w6pv-ohjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:tv-expressive"} {...others} />);
}

export default Component;
