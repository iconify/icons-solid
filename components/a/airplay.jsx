import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cgyf5nwhg.css';
import '../../css/h/h232v2loq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cgyf5nwhg"/><path class="h232v2loq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:airplay"} {...others} />);
}

export default Component;
