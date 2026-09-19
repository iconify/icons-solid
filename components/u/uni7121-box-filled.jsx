import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3m5hu29g.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="e3m5hu29g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:uni7121-box-filled"} {...others} />);
}

export default Component;
