import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h_kcuvj8y.css';
import '../../css/t/tcwe4ewrv.css';
import '../../css/r/rlfopccog.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h_kcuvj8y"/><circle class="tcwe4ewrv"/><path class="rlfopccog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-arrow-left-right"} {...others} />);
}

export default Component;
