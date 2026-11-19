import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xamrqobjx.css';
import '../../css/a/awg4b9bvp.css';
import '../../css/j/jnn9t9hnd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xamrqobjx"/><path class="awg4b9bvp"/><path class="jnn9t9hnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cloud-reload"} {...others} />);
}

export default Component;
