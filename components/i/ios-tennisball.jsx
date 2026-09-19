import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pufuoacsr.css';
import '../../css/o/o1h606vtq.css';
import '../../css/t/ts-4c6cxu.css';
import '../../css/b/bo0gn7djo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pufuoacsr"/><path class="o1h606vtq"/><path class="ts-4c6cxu"/><path class="bo0gn7djo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-tennisball"} {...others} />);
}

export default Component;
