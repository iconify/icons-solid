import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/giagzkb_z.css';
import '../../css/q/qgd51yb9o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="giagzkb_z"/><path class="qgd51yb9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:left-down"} {...others} />);
}

export default Component;
