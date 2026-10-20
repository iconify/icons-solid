import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-7-2mbbf.css';
import '../../css/u/u7xulot5t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u-7-2mbbf"/><path class="u7xulot5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:coupon-48-bold"} {...others} />);
}

export default Component;
