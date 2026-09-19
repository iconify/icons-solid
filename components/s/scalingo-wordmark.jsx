import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_essfbjd.css';
import '../../css/k/k-tauyblt.css';
import '../../css/v/v4fjrsq2c.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="h_essfbjd"/><path class="k-tauyblt"/><path class="v4fjrsq2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:scalingo-wordmark"} {...others} />);
}

export default Component;
