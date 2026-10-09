import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9yioib4q.css';
import '../../css/f/ffopgc0dq.css';
import '../../css/p/pe6rmrbpe.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z9yioib4q"/><path class="ffopgc0dq"/><path class="pe6rmrbpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-van-48"} {...others} />);
}

export default Component;
