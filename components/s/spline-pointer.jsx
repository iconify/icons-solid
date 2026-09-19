import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a-yw60bso.css';
import '../../css/r/rel7kcbvz.css';
import '../../css/a/a_eoytg9v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="a-yw60bso"/><circle class="rel7kcbvz"/><path class="a_eoytg9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:spline-pointer"} {...others} />);
}

export default Component;
