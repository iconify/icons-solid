import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0gbnw5mt.css';
import '../../css/n/nj8qf_mxd.css';
import '../../css/s/s8v6w-jez.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s0gbnw5mt"/><path class="nj8qf_mxd"/><path class="s8v6w-jez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chicken-leg-20"} {...others} />);
}

export default Component;
