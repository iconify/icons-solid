import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aje1gjofx.css';
import '../../css/x/xur4k61po.css';
import '../../css/w/wtc6rtblh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="aje1gjofx"/><path class="xur4k61po"/><path class="wtc6rtblh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:server"} {...others} />);
}

export default Component;
