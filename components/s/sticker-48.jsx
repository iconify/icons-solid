import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eb70seb8t.css';
import '../../css/v/vt3q5aclv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="eb70seb8t"/><path class="vt3q5aclv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sticker-48"} {...others} />);
}

export default Component;
