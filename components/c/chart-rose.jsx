import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kgpwylbgu.css';
import '../../css/i/i7dhmn0vg.css';
import '../../css/o/of67m-bqt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kgpwylbgu"/><path class="i7dhmn0vg"/><path class="of67m-bqt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chart-rose"} {...others} />);
}

export default Component;
