import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wudh0hbyx.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="wudh0hbyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:doughnutchart-filled"} {...others} />);
}

export default Component;
