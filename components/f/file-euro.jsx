import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/ucgpwtbzb.css';
import '../../css/g/gzfk8ub8d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ucgpwtbzb"/><path class="gzfk8ub8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-euro"} {...others} />);
}

export default Component;
