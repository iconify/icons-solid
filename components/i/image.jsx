import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q039x4b1z.css';
import '../../css/v/v32r9rbgo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="q039x4b1z"/><path class="v32r9rbgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:image"} {...others} />);
}

export default Component;
