import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/ft4zavhnt.css';
import '../../css/r/rqalebfjn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ft4zavhnt"/><path class="rqalebfjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:perspective"} {...others} />);
}

export default Component;
