import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tez2iho6w.css';
import '../../css/t/tl7-cna9n.css';
import '../../css/f/fof_1onbd.css';
import '../../css/r/rz157_w1n.css';
import '../../css/p/p2xr78bbn.css';

const viewBox = {"width":164,"height":48};
const content = `<path class="tez2iho6w"/><path class="tl7-cna9n"/><path class="fof_1onbd"/><path class="rz157_w1n"/><path class="p2xr78bbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:honeycomb-light"} {...others} />);
}

export default Component;
