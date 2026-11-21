import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qefm_s0ny.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qefm_s0ny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:adobe-after-effects-dark"} {...others} />);
}

export default Component;
