import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y108lacqb.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="y108lacqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:white-heavy-check-mark-small"} {...others} />);
}

export default Component;
