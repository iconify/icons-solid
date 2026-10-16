import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yakfv4bol.css';
import '../../css/i/ivpk4lbsu.css';
import '../../css/h/hqe77eb4x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yakfv4bol"/><path class="ivpk4lbsu"/><path class="hqe77eb4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:micro-hydro-20"} {...others} />);
}

export default Component;
