import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxr5szb8b.css';

const viewBox = {"width":1136.55,"height":1136.55};
const content = `<path class="zxr5szb8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:roborock"} {...others} />);
}

export default Component;
