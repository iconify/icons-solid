import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgj2dwchq.css';
import '../../css/a/airmpdfkd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qgj2dwchq"/><path class="airmpdfkd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-chatboxes"} {...others} />);
}

export default Component;
