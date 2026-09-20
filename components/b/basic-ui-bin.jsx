import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tp4xoebgk.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="tp4xoebgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:basic-ui-bin"} {...others} />);
}

export default Component;
