import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ia9w32xvn.css';
import '../../css/h/hoycbqb2w.css';
import '../../css/i/if9dnrb8u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ia9w32xvn"/><path class="hoycbqb2w"/><path class="if9dnrb8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:windmill-48"} {...others} />);
}

export default Component;
