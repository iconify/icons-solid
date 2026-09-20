import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xz3g_ob0v.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="xz3g_ob0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:castle-jp"} {...others} />);
}

export default Component;
