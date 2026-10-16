import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lb93embdy.css';
import '../../css/j/jmov7dbvh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lb93embdy"/><path class="jmov7dbvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:route-48-bold"} {...others} />);
}

export default Component;
