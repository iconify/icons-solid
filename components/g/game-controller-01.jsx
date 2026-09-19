import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/owwyehbtl.css';
import '../../css/b/bj61-muiw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="owwyehbtl"/><path class="bj61-muiw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:game-controller-01"} {...others} />);
}

export default Component;
