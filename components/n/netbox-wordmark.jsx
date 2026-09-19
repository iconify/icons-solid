import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4b5m0bco.css';
import '../../css/s/svf4jc_ce.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="e4b5m0bco"/><path class="svf4jc_ce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:netbox-wordmark"} {...others} />);
}

export default Component;
