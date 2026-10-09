import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2nbzfjyr.css';
import '../../css/p/phutzbc8s.css';
import '../../css/i/if7_8s26n.css';
import '../../css/d/dbjniob7y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r2nbzfjyr"/><path class="phutzbc8s"/><path class="if7_8s26n"/><path class="dbjniob7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:campsite-48-bold"} {...others} />);
}

export default Component;
