import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/noninwb3c.css';
import '../../css/p/pc14bww2o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="noninwb3c"/><path class="pc14bww2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:school-tie"} {...others} />);
}

export default Component;
