import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae60vzbgm.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ae60vzbgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:airplane-disabled-remix"} {...others} />);
}

export default Component;
