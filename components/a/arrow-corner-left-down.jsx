import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p9e62_bnc.css';
import '../../css/m/m99fjtwhi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p9e62_bnc"/><path class="m99fjtwhi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:arrow-corner-left-down"} {...others} />);
}

export default Component;
