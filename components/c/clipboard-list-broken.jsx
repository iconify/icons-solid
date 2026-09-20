import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h3lwipb0h.css';
import '../../css/c/ce3b4y7bf.css';
import '../../css/p/pi6wd7bqh.css';
import '../../css/e/e5q6nznvv.css';
import '../../css/x/x2je1dw0q.css';
import '../../css/z/zxxxt7bqz.css';
import '../../css/m/m390b8qby.css';
import '../../css/n/ndq0ugbyy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="h3lwipb0h"/><path class="ce3b4y7bf"/><path class="pi6wd7bqh"/><path class="e5q6nznvv"/><path class="x2je1dw0q"/><path class="zxxxt7bqz"/><path class="m390b8qby"/><path class="ndq0ugbyy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clipboard-list-broken"} {...others} />);
}

export default Component;
