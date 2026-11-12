import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_k-1tony.css';
import '../../css/j/jnok5972w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r_k-1tony"/><path class="jnok5972w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:webhook-tester-light"} {...others} />);
}

export default Component;
