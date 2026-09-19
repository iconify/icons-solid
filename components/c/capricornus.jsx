import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/m65256bwd.css';
import '../../css/w/wcdsfok7s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="m65256bwd"/><circle class="wcdsfok7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:capricornus"} {...others} />);
}

export default Component;
