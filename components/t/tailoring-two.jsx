import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/inw8f8fxw.css';
import '../../css/f/fp4p4_9zd.css';
import '../../css/d/ddortzb1l.css';
import '../../css/v/v1bs-wbdv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="inw8f8fxw"/><path class="fp4p4_9zd"/><path class="ddortzb1l"/><path class="v1bs-wbdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:tailoring-two"} {...others} />);
}

export default Component;
