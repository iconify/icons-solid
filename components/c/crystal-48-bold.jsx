import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uatz-69tj.css';
import '../../css/k/ktv1jnc2y.css';
import '../../css/d/d68s-bbvr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uatz-69tj"/><path class="ktv1jnc2y"/><path class="d68s-bbvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crystal-48-bold"} {...others} />);
}

export default Component;
