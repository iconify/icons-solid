import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/w/w6s_hllyq.css';
import '../../css/o/onq94rn7k.css';
import '../../css/t/t4zaa3-ao.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="w6s_hllyq"/><path class="onq94rn7k"/><path class="t4zaa3-ao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:calendar-add"} {...others} />);
}

export default Component;
