import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qjtl7_4ah.css';
import '../../css/e/e5aykiben.css';
import '../../css/w/wf76rd5aj.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qjtl7_4ah"/><path class="e5aykiben"/><path class="wf76rd5aj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:shop-street-sign"} {...others} />);
}

export default Component;
