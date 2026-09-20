import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ts2yfi-uz.css';
import '../../css/y/yfow2i79k.css';
import '../../css/z/zi08dczyn.css';
import '../../css/s/srroxvbkj.css';
import '../../css/k/kypcbukjr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ts2yfi-uz"/><path class="yfow2i79k"/><path class="zi08dczyn"/><path class="srroxvbkj"/><path class="kypcbukjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:binoculars-outline"} {...others} />);
}

export default Component;
