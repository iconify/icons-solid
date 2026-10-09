import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qnkt3qb8k.css';
import '../../css/v/vl-e_fb9f.css';
import '../../css/f/f84_0wvks.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qnkt3qb8k"/><path class="vl-e_fb9f"/><path class="f84_0wvks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flower-48"} {...others} />);
}

export default Component;
