import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ei1xe8bei.css';
import '../../css/i/i2eqxibtc.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ei1xe8bei"/><path class="i2eqxibtc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:neon-wordmark"} {...others} />);
}

export default Component;
