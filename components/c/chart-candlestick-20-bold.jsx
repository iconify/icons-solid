import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvyc-pbfw.css';
import '../../css/b/bc5q17qnd.css';
import '../../css/t/tnaewda9i.css';
import '../../css/c/coha5wfoj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hvyc-pbfw"/><path class="bc5q17qnd"/><path class="tnaewda9i"/><path class="coha5wfoj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-candlestick-20-bold"} {...others} />);
}

export default Component;
