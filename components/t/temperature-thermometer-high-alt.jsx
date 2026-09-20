import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qeqynlb9f.css';
import '../../css/r/rueko6s1l.css';
import '../../css/u/ukxdkhd4n.css';
import '../../css/h/h3tm6fbzo.css';
import '../../css/h/hm-mdac7b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qeqynlb9f"/><path class="rueko6s1l"/><path class="ukxdkhd4n"/><path class="h3tm6fbzo"/><path class="hm-mdac7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:temperature-thermometer-high-alt"} {...others} />);
}

export default Component;
