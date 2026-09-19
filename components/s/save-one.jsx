import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/jh2j5sozv.css';
import '../../css/k/k38s6xbay.css';
import '../../css/u/uxt7hetvo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="jh2j5sozv"/><path class="k38s6xbay"/><path class="uxt7hetvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:save-one"} {...others} />);
}

export default Component;
