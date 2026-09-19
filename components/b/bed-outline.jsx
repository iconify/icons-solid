import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpw0hrbqk.css';
import '../../css/z/zdracac6l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lpw0hrbqk"/><path class="zdracac6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:bed-outline"} {...others} />);
}

export default Component;
