import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-wqvvv2r.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="z-wqvvv2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:file-graphics-filled"} {...others} />);
}

export default Component;
