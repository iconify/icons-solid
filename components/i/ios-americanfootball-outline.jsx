import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shqqhybdk.css';
import '../../css/r/rqafvib9k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="shqqhybdk"/><path class="rqafvib9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-americanfootball-outline"} {...others} />);
}

export default Component;
