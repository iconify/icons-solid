import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iv6yjefwq.css';
import '../../css/l/lah9vyb0d.css';

const viewBox = {"width":120,"height":120};
const content = `<rect class="iv6yjefwq"/><path class="lah9vyb0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:masheev"} {...others} />);
}

export default Component;
