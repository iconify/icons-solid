import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmbcisb5f.css';
import '../../css/k/ktb8eibqk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kmbcisb5f"/><path class="ktb8eibqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:user-lock-48"} {...others} />);
}

export default Component;
