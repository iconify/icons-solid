import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ljnzsybuh.css';
import '../../css/p/pfb-g5f5t.css';
import '../../css/p/pop0a3r2p.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="ljnzsybuh"/><path class="pfb-g5f5t"/><path class="pop0a3r2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:cs"} {...others} />);
}

export default Component;
