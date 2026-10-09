import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d33itbbpi.css';
import '../../css/j/jbxq4-b5q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d33itbbpi"/><path class="jbxq4-b5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mountain-48"} {...others} />);
}

export default Component;
