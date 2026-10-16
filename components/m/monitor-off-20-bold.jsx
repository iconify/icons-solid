import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lznpb-b-w.css';
import '../../css/w/w0poz4bns.css';
import '../../css/n/n4zx3qb1w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lznpb-b-w"/><path class="w0poz4bns"/><path class="n4zx3qb1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:monitor-off-20-bold"} {...others} />);
}

export default Component;
