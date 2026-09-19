import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tej_g1b-d.css';
import '../../css/n/nwq7urbqo.css';
import '../../css/t/twswkdbiy.css';
import '../../css/p/p7wko903m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tej_g1b-d"/><path class="nwq7urbqo"/><path class="twswkdbiy"/><path class="p7wko903m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-volume-high"} {...others} />);
}

export default Component;
