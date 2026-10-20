import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lld64mb1j.css';
import '../../css/y/yno7aib_e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lld64mb1j"/><path class="yno7aib_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shield-user-48"} {...others} />);
}

export default Component;
