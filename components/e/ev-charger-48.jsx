import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1di2nq9t.css';
import '../../css/q/q4vtdtwun.css';
import '../../css/p/p7kyn66pi.css';
import '../../css/m/moupylo6e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z1di2nq9t"/><path class="q4vtdtwun"/><path class="p7kyn66pi"/><path class="moupylo6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-charger-48"} {...others} />);
}

export default Component;
