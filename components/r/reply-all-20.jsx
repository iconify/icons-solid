import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccnyeob1g.css';
import '../../css/i/i3bujsneb.css';
import '../../css/m/mccycacnb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ccnyeob1g"/><path class="i3bujsneb"/><path class="mccycacnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:reply-all-20"} {...others} />);
}

export default Component;
