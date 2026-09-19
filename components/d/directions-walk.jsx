import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h7zv2cbtr.css';

const viewBox = {"width":280,"height":464};
const content = `<path class="h7zv2cbtr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:directions-walk"} {...others} />);
}

export default Component;
