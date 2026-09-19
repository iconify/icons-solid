import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0jpl0b7e.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="c0jpl0b7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:duplicate"} {...others} />);
}

export default Component;
