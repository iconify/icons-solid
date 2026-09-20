import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8ab7fbau.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t8ab7fbau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:heart-outline"} {...others} />);
}

export default Component;
