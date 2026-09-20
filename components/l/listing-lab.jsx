import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ai0e078-i.css';
import '../../css/i/ipw5bzbjz.css';
import '../../css/t/twp8wbb9h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ai0e078-i"/><path class="ipw5bzbjz"/><path class="twp8wbb9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:listing-lab"} {...others} />);
}

export default Component;
