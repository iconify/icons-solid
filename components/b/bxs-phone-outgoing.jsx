import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ksaeh52hk.css';
import '../../css/u/uh3okxpvx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ksaeh52hk"/><path class="uh3okxpvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-phone-outgoing"} {...others} />);
}

export default Component;
