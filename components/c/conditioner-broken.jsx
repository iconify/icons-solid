import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/ljipgdcmu.css';
import '../../css/n/n75_ldb7t.css';
import '../../css/w/w4l5de1eg.css';
import '../../css/o/ofv53rbzc.css';
import '../../css/l/linyj4b_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ljipgdcmu"/><path class="n75_ldb7t"/><path class="w4l5de1eg"/><path class="ofv53rbzc"/><path class="linyj4b_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:conditioner-broken"} {...others} />);
}

export default Component;
