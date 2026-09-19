import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4kr7db0h.css';
import '../../css/w/w4xt16bhc.css';
import '../../css/l/l3tkt12ja.css';
import '../../css/r/r_99_sgdv.css';
import '../../css/c/ck8h4nb_y.css';
import '../../css/t/tkuvc-5zm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k4kr7db0h"><circle class="w4xt16bhc"/><path class="l3tkt12ja"/><path class="r_99_sgdv"/><circle class="ck8h4nb_y"/><path class="tkuvc-5zm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:music-2-bold"} {...others} />);
}

export default Component;
