import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m9gx7_bse.css';
import '../../css/s/sjfvlcc8m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="m9gx7_bse"/><path class="sjfvlcc8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:column-insert"} {...others} />);
}

export default Component;
