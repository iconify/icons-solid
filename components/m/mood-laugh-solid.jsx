import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jumlimbfi.css';
import '../../css/j/jcs69s1gm.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="jumlimbfi"/><path clip-rule="evenodd" class="jcs69s1gm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:mood-laugh-solid"} {...others} />);
}

export default Component;
