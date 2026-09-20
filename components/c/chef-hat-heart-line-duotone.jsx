import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nnenlb9-y.css';
import '../../css/g/g9h454b1v.css';
import '../../css/c/cjw43km3x.css';
import '../../css/b/bscxys1lk.css';
import '../../css/m/maxmd-b_j.css';
import '../../css/l/l5mj12bgx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nnenlb9-y"/><path class="g9h454b1v"/><path class="cjw43km3x"/><path class="bscxys1lk"/><path class="maxmd-b_j"/><path class="l5mj12bgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chef-hat-heart-line-duotone"} {...others} />);
}

export default Component;
