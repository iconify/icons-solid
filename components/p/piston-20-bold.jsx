import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yl4iqhb4q.css';
import '../../css/q/qc3m2d20m.css';
import '../../css/a/azoccq8xh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yl4iqhb4q"/><path class="qc3m2d20m"/><path class="azoccq8xh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:piston-20-bold"} {...others} />);
}

export default Component;
