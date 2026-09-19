import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gs_25ysim.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="gs_25ysim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:money-dollar"} {...others} />);
}

export default Component;
