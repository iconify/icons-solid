import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mb6pms4ia.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mb6pms4ia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:puzzle-rtl"} {...others} />);
}

export default Component;
