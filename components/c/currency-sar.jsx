import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y6jjfugir.css';
import '../../css/v/v5udq_bvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y6jjfugir"/><path class="v5udq_bvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:currency-sar"} {...others} />);
}

export default Component;
