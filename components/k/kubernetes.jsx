import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ix-pf_jrx.css';
import '../../css/s/s8ttcqbdx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ix-pf_jrx"/><path class="s8ttcqbdx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kubernetes"} {...others} />);
}

export default Component;
