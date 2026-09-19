import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sb3ggp-ub.css';

const viewBox = {"width":320,"height":512};
const content = `<path class="sb3ggp-ub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:facebook-f"} {...others} />);
}

export default Component;
