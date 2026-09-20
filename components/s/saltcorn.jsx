import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5aelq3-p.css';
import '../../css/r/r6ik5x-ce.css';
import '../../css/m/mp3pi0u8z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e5aelq3-p"/><path class="r6ik5x-ce"/><path class="mp3pi0u8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:saltcorn"} {...others} />);
}

export default Component;
