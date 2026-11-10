import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mx43o5bvn.css';
import '../../css/r/rwz9nobhh.css';
import '../../css/n/n2jnfabmn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mx43o5bvn"/><path class="rwz9nobhh"/><path class="n2jnfabmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:battery-off"} {...others} />);
}

export default Component;
