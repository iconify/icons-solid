import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/few52z2af.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="few52z2af"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:cloudflare"} {...others} />);
}

export default Component;
