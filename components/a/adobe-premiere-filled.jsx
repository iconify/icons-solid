import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0am-ac5y.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="h0am-ac5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:adobe-premiere-filled"} {...others} />);
}

export default Component;
