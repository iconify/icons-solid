import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yaa9r6mvo.css';
import '../../css/w/w0poz4bns.css';
import '../../css/j/jwu0w_2rv.css';
import '../../css/x/xak2o0bmu.css';
import '../../css/k/k6sa60boh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yaa9r6mvo"/><path class="w0poz4bns"/><path class="jwu0w_2rv"/><path class="xak2o0bmu"/><path class="k6sa60boh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:monitor-x-20-bold"} {...others} />);
}

export default Component;
