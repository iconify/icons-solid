import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x42wh-bdu.css';
import '../../css/t/ti2vfubmg.css';
import '../../css/s/s8egyjbkm.css';
import '../../css/z/zjt4gb9yw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="x42wh-bdu"/><path class="ti2vfubmg"/><path class="s8egyjbkm"/><path class="zjt4gb9yw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:blocks-linear"} {...others} />);
}

export default Component;
