import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jfqgvyb-f.css';
import '../../css/x/x24-81b8k.css';
import '../../css/h/h9d3fyjrw.css';
import '../../css/o/ovw7qog3m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jfqgvyb-f"/><rect class="x24-81b8k"/><path class="h9d3fyjrw"/><path class="ovw7qog3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:error-403"} {...others} />);
}

export default Component;
