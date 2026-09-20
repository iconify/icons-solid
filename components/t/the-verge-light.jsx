import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njfju7uob.css';
import '../../css/m/mb039gb-o.css';
import '../../css/i/ibvcm-bop.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="njfju7uob"/><path class="mb039gb-o"/><path class="ibvcm-bop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:the-verge-light"} {...others} />);
}

export default Component;
