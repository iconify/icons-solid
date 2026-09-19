import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e2agazbhd.css';
import '../../css/v/v_3gm9b6z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="e2agazbhd"/><path class="v_3gm9b6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:row-insert"} {...others} />);
}

export default Component;
