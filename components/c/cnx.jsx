import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dg4d_poch.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/k/k5darrm3j.css';
import '../../css/p/p6g_r5ogo.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="dg4d_poch"/><g class="n1mjunbsu"><path class="k5darrm3j"/><path class="p6g_r5ogo"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:cnx"} {...others} />);
}

export default Component;
