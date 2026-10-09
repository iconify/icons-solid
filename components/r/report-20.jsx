import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/re0n-jb1b.css';
import '../../css/o/ooz3o6s1d.css';
import '../../css/o/o76rkrbtm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="re0n-jb1b"/><path class="ooz3o6s1d"/><path class="o76rkrbtm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:report-20"} {...others} />);
}

export default Component;
