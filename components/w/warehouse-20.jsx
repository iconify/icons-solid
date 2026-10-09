import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmf8y5bqk.css';
import '../../css/w/wt80nmbhx.css';
import '../../css/s/sfceoobcy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wmf8y5bqk"/><path class="wt80nmbhx"/><path class="sfceoobcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:warehouse-20"} {...others} />);
}

export default Component;
