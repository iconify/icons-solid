import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wry-w1bxn.css';
import '../../css/n/nyurgsbqe.css';
import '../../css/d/djgk4x_3w.css';
import '../../css/z/z16su76ar.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="wry-w1bxn"/><rect class="nyurgsbqe"/><rect class="djgk4x_3w"/><rect class="z16su76ar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:stats-chart-outline"} {...others} />);
}

export default Component;
