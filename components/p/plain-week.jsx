import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpzvbnz3y.css';
import '../../css/t/tkao4yftb.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="vpzvbnz3y"/><path class="tkao4yftb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:plain-week"} {...others} />);
}

export default Component;
