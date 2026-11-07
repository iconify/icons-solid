import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wd39qiwhy.css';
import '../../css/m/mn-eum1fs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wd39qiwhy"/><path class="mn-eum1fs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:branching-paths-up-bold-duotone"} {...others} />);
}

export default Component;
