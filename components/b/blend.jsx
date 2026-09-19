import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/elti8xbhv.css';
import '../../css/f/fwwvtv5go.css';
import '../../css/e/e-5oirana.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="elti8xbhv"/><path class="fwwvtv5go"/><path class="e-5oirana"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:blend"} {...others} />);
}

export default Component;
