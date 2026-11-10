import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/aygs-2bgn.css';
import '../../css/f/ffq40l0fx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="aygs-2bgn"/><path class="ffq40l0fx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:decimals"} {...others} />);
}

export default Component;
