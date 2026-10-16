import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nsqs2tb6j.css';
import '../../css/w/w1hy86m-v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nsqs2tb6j"/><path class="w1hy86m-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-pump-hybrid-48"} {...others} />);
}

export default Component;
