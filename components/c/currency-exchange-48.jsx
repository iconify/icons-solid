import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ypa03g2ao.css';
import '../../css/c/c0-sywbwt.css';
import '../../css/v/v45g71edj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ypa03g2ao"/><path class="c0-sywbwt"/><path class="v45g71edj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:currency-exchange-48"} {...others} />);
}

export default Component;
