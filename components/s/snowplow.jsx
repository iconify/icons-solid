import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pru2e3b6y.css';
import '../../css/c/cbv_0y6ux.css';
import '../../css/y/yjfp3rp6o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pru2e3b6y"/><path class="cbv_0y6ux"/><path class="yjfp3rp6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:snowplow"} {...others} />);
}

export default Component;
