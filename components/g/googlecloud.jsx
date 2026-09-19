import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t76i9hy9s.css';
import '../../css/w/w3k2bgbvi.css';
import '../../css/m/mqimai2df.css';
import '../../css/i/ijb7gtbpo.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="t76i9hy9s"/><path class="w3k2bgbvi"/><path class="mqimai2df"/><path class="ijb7gtbpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:googlecloud"} {...others} />);
}

export default Component;
