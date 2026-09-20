import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmwjm1alm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wmwjm1alm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:five-octagon-solid"} {...others} />);
}

export default Component;
