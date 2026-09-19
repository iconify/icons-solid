import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/eypk3skau.css';
import '../../css/k/kf2q3hbnt.css';
import '../../css/p/pb4zwjt1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="eypk3skau"/><circle class="kf2q3hbnt"/><path class="pb4zwjt1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:spline"} {...others} />);
}

export default Component;
