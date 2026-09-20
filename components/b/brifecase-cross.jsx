import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/s/s3nhjubuw.css';
import '../../css/l/lwenppemr.css';
import '../../css/x/x8uq8pl-b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="s3nhjubuw"/><path class="lwenppemr"/><path class="x8uq8pl-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:brifecase-cross"} {...others} />);
}

export default Component;
