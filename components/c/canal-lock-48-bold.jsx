import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6cvwtbsp.css';
import '../../css/n/nw87p9b0z.css';
import '../../css/j/j9-dsob8b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d6cvwtbsp"/><path class="nw87p9b0z"/><path class="j9-dsob8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:canal-lock-48-bold"} {...others} />);
}

export default Component;
