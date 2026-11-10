import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kv4o3fbbf.css';
import '../../css/v/vv_7hnbbp.css';
import '../../css/i/i4xshbbgd.css';
import '../../css/l/lawquj2sa.css';
import '../../css/j/jrza9n2pe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kv4o3fbbf"/><path class="vv_7hnbbp"/><path class="i4xshbbgd"/><path class="lawquj2sa"/><path class="jrza9n2pe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-pc-cpu"} {...others} />);
}

export default Component;
