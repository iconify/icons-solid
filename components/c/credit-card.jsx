import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mc75m8d8n.css';
import '../../css/t/tzev64bri.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="mc75m8d8n"/><path class="tzev64bri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:credit-card"} {...others} />);
}

export default Component;
