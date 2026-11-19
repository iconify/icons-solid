import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tcccezkkp.css';
import '../../css/r/rqby53ygo.css';
import '../../css/a/apqmqp68f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tcccezkkp"/><path class="rqby53ygo"/><path class="apqmqp68f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:code-sparkle"} {...others} />);
}

export default Component;
