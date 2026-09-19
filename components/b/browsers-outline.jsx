import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpbqltkex.css';
import '../../css/m/mkt8b3bpv.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="wpbqltkex"/><path class="mkt8b3bpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:browsers-outline"} {...others} />);
}

export default Component;
