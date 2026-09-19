import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3w7_bbqb.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="x3w7_bbqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:squint-smiling-face-small"} {...others} />);
}

export default Component;
