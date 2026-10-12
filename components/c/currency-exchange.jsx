import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/ma1cm1vdh.css';
import '../../css/e/ezuqc7blc.css';
import '../../css/k/kzmmr-3qy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ma1cm1vdh"/><path class="ezuqc7blc"/><path class="kzmmr-3qy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:currency-exchange"} {...others} />);
}

export default Component;
