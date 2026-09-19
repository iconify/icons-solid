import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wksup-1_p.css';
import '../../css/r/r0_9jbcny.css';
import '../../css/w/wcmprwboc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wksup-1_p"/><path class="r0_9jbcny"/><path class="wcmprwboc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:es-pv-1x1"} {...others} />);
}

export default Component;
