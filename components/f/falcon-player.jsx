import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g225s7bhh.css';
import '../../css/l/lqs3it20u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g225s7bhh"/><path class="lqs3it20u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:falcon-player"} {...others} />);
}

export default Component;
