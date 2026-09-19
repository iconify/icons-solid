import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1y8fp8ua.css';
import '../../css/l/lm9p31gmj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m1y8fp8ua"/><path class="lm9p31gmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:terminal-outlined"} {...others} />);
}

export default Component;
