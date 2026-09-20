import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/i/iiapfbc3q.css';
import '../../css/x/x85l7c-5o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="iiapfbc3q"/><path class="x85l7c-5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:reverse"} {...others} />);
}

export default Component;
