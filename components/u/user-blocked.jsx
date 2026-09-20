import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6t2-l6zm.css';
import '../../css/u/u6mx54sdu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m6t2-l6zm"/><path class="u6mx54sdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:user-blocked"} {...others} />);
}

export default Component;
