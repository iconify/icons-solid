import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/szti9xf6x.css';
import '../../css/j/j1nztzb8t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="szti9xf6x"/><path class="j1nztzb8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-decrease"} {...others} />);
}

export default Component;
