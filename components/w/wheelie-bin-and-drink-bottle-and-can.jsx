import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xoq87o7cm.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="xoq87o7cm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:wheelie-bin-and-drink-bottle-and-can"} {...others} />);
}

export default Component;
