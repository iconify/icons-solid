import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pbrurftxq.css';
import '../../css/t/tn4hw5lgp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pbrurftxq"/><path class="tn4hw5lgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:job-search"} {...others} />);
}

export default Component;
