import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmratjbob.css';
import '../../css/a/av226wb2v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rmratjbob"/><path class="av226wb2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:desert-20"} {...others} />);
}

export default Component;
