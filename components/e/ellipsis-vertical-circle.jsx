import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yraf-tb9h.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="yraf-tb9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:ellipsis-vertical-circle"} {...others} />);
}

export default Component;
