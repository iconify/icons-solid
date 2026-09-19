import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-j2tshyf.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="h-j2tshyf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:edit-solid-mirrored-12"} {...others} />);
}

export default Component;
