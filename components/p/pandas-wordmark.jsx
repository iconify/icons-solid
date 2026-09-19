import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glc6tuupn.css';
import '../../css/g/gx_0y1b1g.css';
import '../../css/x/xhsp1sb3q.css';
import '../../css/o/o84t4kbli.css';
import '../../css/f/fc64knnzt.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="glc6tuupn"/><path class="gx_0y1b1g"/><path class="xhsp1sb3q"/><path class="o84t4kbli"/><path class="fc64knnzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:pandas-wordmark"} {...others} />);
}

export default Component;
