import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t99gmo0wz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t99gmo0wz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:configure"} {...others} />);
}

export default Component;
