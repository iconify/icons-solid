import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zu8hv6hob.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zu8hv6hob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:pyramid-filled"} {...others} />);
}

export default Component;
