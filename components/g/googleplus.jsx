import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5lrlubhs.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="q5lrlubhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:googleplus"} {...others} />);
}

export default Component;
