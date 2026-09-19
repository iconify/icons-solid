import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ox8i1rs_p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ox8i1rs_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:doubleexclaimationmark"} {...others} />);
}

export default Component;
