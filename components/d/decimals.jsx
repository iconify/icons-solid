import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/ga6739bbk.css';
import '../../css/a/aygs-2bgn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ga6739bbk"/><path class="aygs-2bgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:decimals"} {...others} />);
}

export default Component;
