import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yajgwt04s.css';
import '../../css/t/t0m57ubqr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yajgwt04s"/><path class="t0m57ubqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-line-20"} {...others} />);
}

export default Component;
