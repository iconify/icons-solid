import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zeha0ebuo.css';
import '../../css/u/uc-v4pb8z.css';
import '../../css/k/ku4eu0m6p.css';
import '../../css/q/qksz56pwd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zeha0ebuo"/><path class="uc-v4pb8z"/><path class="ku4eu0m6p"/><path class="qksz56pwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-6-linear"} {...others} />);
}

export default Component;
