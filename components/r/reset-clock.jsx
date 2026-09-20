import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezfumgw-x.css';
import '../../css/x/xlag7ibmb.css';
import '../../css/t/t31jrybwu.css';
import '../../css/n/njow6lhet.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ezfumgw-x"><path class="xlag7ibmb"/><path class="t31jrybwu"/><path class="njow6lhet"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:reset-clock"} {...others} />);
}

export default Component;
