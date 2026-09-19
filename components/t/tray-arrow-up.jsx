import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fd-bllh8b.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="fd-bllh8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:tray-arrow-up"} {...others} />);
}

export default Component;
