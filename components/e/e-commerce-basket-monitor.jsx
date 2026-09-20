import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j33-0cknq.css';
import '../../css/y/yrh-yz36i.css';
import '../../css/y/ynhcynb8o.css';
import '../../css/f/fzcr7h09t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j33-0cknq"/><path class="yrh-yz36i"/><path class="ynhcynb8o"/><path class="fzcr7h09t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:e-commerce-basket-monitor"} {...others} />);
}

export default Component;
