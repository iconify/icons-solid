import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/g/guewfbcxi.css';
import '../../css/i/iofdikb8s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="guewfbcxi"/><path class="iofdikb8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:setting2"} {...others} />);
}

export default Component;
