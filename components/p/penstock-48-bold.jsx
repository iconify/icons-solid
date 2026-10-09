import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-uyp2b0j.css';
import '../../css/q/qgl4r9bnu.css';
import '../../css/y/yf83rla5y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u-uyp2b0j"/><path class="qgl4r9bnu"/><path class="yf83rla5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:penstock-48-bold"} {...others} />);
}

export default Component;
