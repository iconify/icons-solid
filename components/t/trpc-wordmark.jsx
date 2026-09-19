import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xj77lc-6d.css';
import '../../css/e/e0nkev_-m.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="xj77lc-6d"/><path class="e0nkev_-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:trpc-wordmark"} {...others} />);
}

export default Component;
