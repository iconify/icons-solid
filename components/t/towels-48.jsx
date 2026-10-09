import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yf73wyzyl.css';
import '../../css/m/m3ucd-ekr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yf73wyzyl"/><path class="m3ucd-ekr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:towels-48"} {...others} />);
}

export default Component;
