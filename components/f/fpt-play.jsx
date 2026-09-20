import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/evbg5bcoz.css';

const viewBox = {"width":279.62,"height":279.9};
const content = `<path class="evbg5bcoz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:fpt-play"} {...others} />);
}

export default Component;
