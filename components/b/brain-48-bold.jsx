import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fy3btfbfu.css';
import '../../css/b/b79ewjo9h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fy3btfbfu"/><path class="b79ewjo9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:brain-48-bold"} {...others} />);
}

export default Component;
