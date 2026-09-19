import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/ba8_ajblz.css';
import '../../css/u/u7kt-gdhy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ba8_ajblz"/><path class="u7kt-gdhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:coupon-percent"} {...others} />);
}

export default Component;
