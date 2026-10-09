import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhzmbr41b.css';
import '../../css/i/i1hgre67m.css';
import '../../css/s/sbqip972w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qhzmbr41b"/><path class="i1hgre67m"/><path class="sbqip972w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bell-tent-20"} {...others} />);
}

export default Component;
