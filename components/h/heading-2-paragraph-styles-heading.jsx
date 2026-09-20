import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t537pzbol.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="t537pzbol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:heading-2-paragraph-styles-heading"} {...others} />);
}

export default Component;
