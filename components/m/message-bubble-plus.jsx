import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x2y2tbcyw.css';
import '../../css/a/aevd0o1gl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x2y2tbcyw"/><path class="aevd0o1gl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:message-bubble-plus"} {...others} />);
}

export default Component;
