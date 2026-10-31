import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9s0uaccs.css';
import '../../css/m/mvmxjh5gz.css';
import '../../css/p/pmrwhdclp.css';
import '../../css/e/ecu-ugb6g.css';
import '../../css/g/g56zy0bjq.css';
import '../../css/f/fgqwrob_t.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="e9s0uaccs"/><path class="mvmxjh5gz"/><path class="pmrwhdclp"/><path class="ecu-ugb6g"/><path class="g56zy0bjq"/><path class="fgqwrob_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:christmas-island"} {...others} />);
}

export default Component;
