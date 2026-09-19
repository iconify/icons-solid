import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/t18islbco.css';
import '../../css/m/mz8pfhblh.css';
import '../../css/d/dnpvs6bkb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="t18islbco"/><path class="mz8pfhblh"/><path class="dnpvs6bkb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-block-01"} {...others} />);
}

export default Component;
