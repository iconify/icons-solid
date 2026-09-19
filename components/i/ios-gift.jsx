import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omu-7_bkt.css';
import '../../css/y/yi7yklpos.css';
import '../../css/l/li6tqsbtx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="omu-7_bkt"/><path class="yi7yklpos"/><path class="li6tqsbtx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-gift"} {...others} />);
}

export default Component;
