import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tjhy8yb-f.css';
import '../../css/f/f9b4udbcs.css';
import '../../css/o/o0bd2q3dl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tjhy8yb-f"/><path class="f9b4udbcs"/><path class="o0bd2q3dl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-burner-48-bold"} {...others} />);
}

export default Component;
