import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wjfhqgb9t.css';
import '../../css/f/fxj0yabdo.css';
import '../../css/z/z69o9sb6b.css';
import '../../css/p/pqgtaob0r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wjfhqgb9t"/><path class="fxj0yabdo"/><path class="z69o9sb6b"/><path class="pqgtaob0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:vacuum-48"} {...others} />);
}

export default Component;
