import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdurj7csh.css';
import '../../css/e/ex-yslbqn.css';
import '../../css/f/fp2iggcyd.css';

const viewBox = {"width":500,"height":209.52};
const content = `<g class="hdurj7csh"><path class="ex-yslbqn"/><path class="fp2iggcyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:british-telecom"} {...others} />);
}

export default Component;
