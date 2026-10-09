import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p0wv7wb3z.css';
import '../../css/e/epk77cclf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p0wv7wb3z"/><path class="epk77cclf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:a-frame-48"} {...others} />);
}

export default Component;
