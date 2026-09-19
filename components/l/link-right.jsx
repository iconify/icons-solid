import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rf4vv5b5g.css';
import '../../css/y/yh_44w7ma.css';
import '../../css/m/mwhmdkjqx.css';
import '../../css/o/o4rf_c7eb.css';
import '../../css/f/fo5ymx3ih.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="rf4vv5b5g"/><path class="yh_44w7ma"/><path class="mwhmdkjqx"/><path class="o4rf_c7eb"/><path class="fo5ymx3ih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:link-right"} {...others} />);
}

export default Component;
