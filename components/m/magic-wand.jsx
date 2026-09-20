import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5h4r7b4t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n5h4r7b4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:magic-wand"} {...others} />);
}

export default Component;
