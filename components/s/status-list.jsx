import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/en96x3gyh.css';
import '../../css/h/h68a5vtzz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="en96x3gyh"/><circle class="h68a5vtzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:status-list"} {...others} />);
}

export default Component;
