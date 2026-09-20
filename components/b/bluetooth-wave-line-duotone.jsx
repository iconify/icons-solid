import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/plmy2zvgw.css';
import '../../css/s/s5eh35bzd.css';
import '../../css/l/lzg1d1lbm.css';
import '../../css/q/qge1xjbzq.css';
import '../../css/j/js7gvq8hx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="plmy2zvgw"/><path class="s5eh35bzd"/><path class="lzg1d1lbm"/><path class="qge1xjbzq"/><path class="js7gvq8hx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bluetooth-wave-line-duotone"} {...others} />);
}

export default Component;
