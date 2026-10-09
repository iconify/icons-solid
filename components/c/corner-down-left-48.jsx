import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w64l-ub0s.css';
import '../../css/f/f8bjlbjhm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w64l-ub0s"/><path class="f8bjlbjhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-down-left-48"} {...others} />);
}

export default Component;
