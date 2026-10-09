import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsaiwdb4t.css';
import '../../css/b/bwry4rblx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tsaiwdb4t"/><path class="bwry4rblx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dining-48"} {...others} />);
}

export default Component;
