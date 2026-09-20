import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pl3au9b1n.css';
import '../../css/r/rgt8wo40q.css';
import '../../css/j/jkzq9lbgh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pl3au9b1n"/><path class="rgt8wo40q"/><path class="jkzq9lbgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:notification-alarm-2-flat"} {...others} />);
}

export default Component;
