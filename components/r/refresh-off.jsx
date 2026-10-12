import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xw_j2ib2i.css';
import '../../css/n/n2-pgm8bv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xw_j2ib2i"/><path class="n2-pgm8bv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:refresh-off"} {...others} />);
}

export default Component;
