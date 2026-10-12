import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rn6ox60hn.css';
import '../../css/z/z4phq-b2x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rn6ox60hn"/><path class="z4phq-b2x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:list-unordered"} {...others} />);
}

export default Component;
