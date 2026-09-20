import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f98dwt4hq.css';
import '../../css/c/cqg5ru5ax.css';
import '../../css/s/sy-98tb6x.css';
import '../../css/n/nzmqz3bvt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="f98dwt4hq"/><path class="cqg5ru5ax"/><path class="sy-98tb6x"/><path class="nzmqz3bvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-speaker-line-duotone"} {...others} />);
}

export default Component;
