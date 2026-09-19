import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zr399-bdh.css';
import '../../css/i/in-984b7z.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="zr399-bdh"/><path class="in-984b7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:briefcase-outline"} {...others} />);
}

export default Component;
