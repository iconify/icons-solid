import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uo6ekxl-i.css';

const viewBox = {"width":256,"height":256};
const content = `<path clip-rule="evenodd" class="uo6ekxl-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:caret-up"} {...others} />);
}

export default Component;
