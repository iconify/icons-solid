import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vly4rr3ve.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="vly4rr3ve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:logo-aax"} {...others} />);
}

export default Component;
