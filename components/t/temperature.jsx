import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/nqp1bwl7j.css';
import '../../css/s/saigv311i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="nqp1bwl7j"/><path class="saigv311i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:temperature"} {...others} />);
}

export default Component;
