import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n73n-w65q.css';
import '../../css/v/vzk8q3alw.css';
import '../../css/d/dwojr7byb.css';
import '../../css/r/rfxpxtjlq.css';
import '../../css/v/vulww4b1s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n73n-w65q"/><path class="vzk8q3alw"/><path class="dwojr7byb"/><path class="rfxpxtjlq"/><path class="vulww4b1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:location-map"} {...others} />);
}

export default Component;
