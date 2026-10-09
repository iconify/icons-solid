import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lymkpobns.css';
import '../../css/x/xfeis42ke.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lymkpobns"/><path class="xfeis42ke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:prism-48"} {...others} />);
}

export default Component;
