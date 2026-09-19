import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jh10aebjc.css';
import '../../css/w/wo5yot8rw.css';
import '../../css/k/kz5dvk1mk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jh10aebjc"/><path class="wo5yot8rw"/><path class="kz5dvk1mk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-view"} {...others} />);
}

export default Component;
