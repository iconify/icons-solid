import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uhdy70bcr.css';
import '../../css/l/l2895_5bw.css';
import '../../css/f/fo69pib0w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uhdy70bcr"/><path class="l2895_5bw"/><path class="fo69pib0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:scrutiny"} {...others} />);
}

export default Component;
