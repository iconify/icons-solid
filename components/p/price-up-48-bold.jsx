import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qcp6u-oop.css';
import '../../css/x/xgx2z7ryy.css';
import '../../css/o/o4v1t0brm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qcp6u-oop"/><path class="xgx2z7ryy"/><path class="o4v1t0brm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:price-up-48-bold"} {...others} />);
}

export default Component;
