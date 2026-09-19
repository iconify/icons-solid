import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a4ql3x9ff.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a4ql3x9ff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:code-download-outline"} {...others} />);
}

export default Component;
