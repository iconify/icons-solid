import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vte9i7bqc.css';
import '../../css/y/yinb-z7cx.css';
import '../../css/p/p-7aslvxg.css';
import '../../css/i/ipnosvgas.css';
import '../../css/t/t2m3jlpnn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vte9i7bqc"/><path class="yinb-z7cx"/><path class="p-7aslvxg"/><path class="ipnosvgas"/><path class="t2m3jlpnn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbell-large-minimalistic-linear"} {...others} />);
}

export default Component;
