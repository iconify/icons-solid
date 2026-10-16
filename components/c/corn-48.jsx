import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5i0nibgo.css';
import '../../css/h/hmt9evbnn.css';
import '../../css/w/we9u0mx2s.css';
import '../../css/a/atyhtibwr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r5i0nibgo"/><path class="hmt9evbnn"/><path class="we9u0mx2s"/><path class="atyhtibwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corn-48"} {...others} />);
}

export default Component;
