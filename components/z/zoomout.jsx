import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mav5rmb1c.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="mav5rmb1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:zoomout"} {...others} />);
}

export default Component;
