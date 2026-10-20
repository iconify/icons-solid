import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_pz3rxhk.css';
import '../../css/z/zfk_hjb8k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y_pz3rxhk"/><path class="zfk_hjb8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-sparkle-48-bold"} {...others} />);
}

export default Component;
