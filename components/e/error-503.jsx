import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h9d3fyjrw.css';
import '../../css/o/ovw7qog3m.css';
import '../../css/c/cwuhwnv2s.css';
import '../../css/v/vce2rf8kl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h9d3fyjrw"/><path class="ovw7qog3m"/><rect class="cwuhwnv2s"/><path class="vce2rf8kl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:error-503"} {...others} />);
}

export default Component;
