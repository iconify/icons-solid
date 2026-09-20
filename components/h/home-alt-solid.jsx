import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kv1zpjeyq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="kv1zpjeyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:home-alt-solid"} {...others} />);
}

export default Component;
