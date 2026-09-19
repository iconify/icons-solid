import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_25gqbls.css';
import '../../css/c/c8_pid-oz.css';
import '../../css/r/rr5ch2bdp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s_25gqbls"/><path class="c8_pid-oz"/><path class="rr5ch2bdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:info"} {...others} />);
}

export default Component;
