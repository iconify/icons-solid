import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/monncbbwg.css';
import '../../css/r/r10bd4dnt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="monncbbwg"/><path class="r10bd4dnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-search-02"} {...others} />);
}

export default Component;
