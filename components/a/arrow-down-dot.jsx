import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o5xpufbjf.css';
import '../../css/d/d9t5kgbyo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o5xpufbjf"/><path class="d9t5kgbyo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:arrow-down-dot"} {...others} />);
}

export default Component;
