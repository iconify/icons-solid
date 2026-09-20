import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fqqct-b5x.css';
import '../../css/r/rvg5dwd0q.css';
import '../../css/k/k4bytsftl.css';
import '../../css/h/hn0mec2mq.css';
import '../../css/v/v31cxj-zs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fqqct-b5x"/><path class="rvg5dwd0q"/><path class="k4bytsftl"/><path class="hn0mec2mq"/><path class="v31cxj-zs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:monitor-smartphone-broken"} {...others} />);
}

export default Component;
