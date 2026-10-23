import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j0ld87yxf.css';
import '../../css/v/vl-konbub.css';
import '../../css/x/xh1w_9b6x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j0ld87yxf"/><path class="vl-konbub"/><path class="xh1w_9b6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:drop-off"} {...others} />);
}

export default Component;
