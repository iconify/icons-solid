import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a4vliqeko.css';
import '../../css/v/v-08u1b_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="a4vliqeko"/><path class="v-08u1b_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wineglass-broken"} {...others} />);
}

export default Component;
