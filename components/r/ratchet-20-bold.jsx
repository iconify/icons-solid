import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c93ue0bjc.css';
import '../../css/c/c47fazbzx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c93ue0bjc"/><path class="c47fazbzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ratchet-20-bold"} {...others} />);
}

export default Component;
