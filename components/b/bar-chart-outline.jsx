import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ou5lp3-8i.css';
import '../../css/f/fcfjhdcnf.css';
import '../../css/e/e7n2iruil.css';
import '../../css/q/qaayn7bcp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ou5lp3-8i"/><rect class="fcfjhdcnf"/><rect class="e7n2iruil"/><rect class="qaayn7bcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:bar-chart-outline"} {...others} />);
}

export default Component;
