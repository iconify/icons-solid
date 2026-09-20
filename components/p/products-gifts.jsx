import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mdga26_1w.css';
import '../../css/h/h_rrp_1zi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mdga26_1w"/><path class="h_rrp_1zi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:products-gifts"} {...others} />);
}

export default Component;
