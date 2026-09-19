import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cp61wiopl.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="cp61wiopl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:six-of-circles-mahjong"} {...others} />);
}

export default Component;
