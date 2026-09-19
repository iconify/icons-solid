import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whxvwgb9b.css';

const viewBox = {"width":256,"height":256};
const content = `<path clip-rule="evenodd" class="whxvwgb9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:caret-left"} {...others} />);
}

export default Component;
