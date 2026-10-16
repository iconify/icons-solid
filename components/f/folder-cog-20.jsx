import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3me-4caq.css';
import '../../css/w/wgtq23b2b.css';
import '../../css/i/i9p3igbhu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c3me-4caq"/><path class="wgtq23b2b"/><path class="i9p3igbhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-cog-20"} {...others} />);
}

export default Component;
