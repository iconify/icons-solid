import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h6z068zxy.css';
import '../../css/m/md286fbip.css';
import '../../css/w/wdu6_l50z.css';
import '../../css/h/h9k36-38v.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="h6z068zxy"/><g class="md286fbip"><path class="wdu6_l50z"/><path class="h9k36-38v"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:wbtc"} {...others} />);
}

export default Component;
