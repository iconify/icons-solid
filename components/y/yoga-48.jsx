import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zeaj4ri2b.css';
import '../../css/x/xn9gzsb0y.css';
import '../../css/h/hlj3itbhb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zeaj4ri2b"/><path class="xn9gzsb0y"/><path class="hlj3itbhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:yoga-48"} {...others} />);
}

export default Component;
