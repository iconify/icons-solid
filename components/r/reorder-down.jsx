import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gaqimdg5z.css';
import '../../css/h/hwidkmdhi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gaqimdg5z"/><path class="hwidkmdhi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:reorder-down"} {...others} />);
}

export default Component;
