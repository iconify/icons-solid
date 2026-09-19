import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/m65256bwd.css';
import '../../css/i/i-5k4teut.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="m65256bwd"/><circle class="i-5k4teut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:capricornus"} {...others} />);
}

export default Component;
