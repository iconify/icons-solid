import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svn20mxkr.css';
import '../../css/l/l-f6ssbaf.css';
import '../../css/r/ra1t7sbvx.css';
import '../../css/q/qam-_kbnn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="svn20mxkr"/><path class="l-f6ssbaf"/><path class="ra1t7sbvx"/><path class="qam-_kbnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cottage-48-bold"} {...others} />);
}

export default Component;
