import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yx-x57btp.css';
import '../../css/b/b2241hbqd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yx-x57btp"/><path class="b2241hbqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:caravan-48-bold"} {...others} />);
}

export default Component;
