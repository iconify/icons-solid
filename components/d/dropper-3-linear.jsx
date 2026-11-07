import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bh5981mts.css';
import '../../css/w/w9wkd2b5z.css';
import '../../css/i/iudduob5r.css';
import '../../css/m/msronwbal.css';
import '../../css/o/o95ej6b5s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bh5981mts"/><path class="w9wkd2b5z"/><path class="iudduob5r"/><path class="msronwbal"/><path class="o95ej6b5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dropper-3-linear"} {...others} />);
}

export default Component;
