import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tb96ptbmh.css';
import '../../css/n/n_yelj1ty.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tb96ptbmh"/><path class="n_yelj1ty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gps-20-bold"} {...others} />);
}

export default Component;
