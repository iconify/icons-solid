import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n8cr_8bjz.css';
import '../../css/p/prakunwcw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n8cr_8bjz"/><path class="prakunwcw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:traffic-jam-01"} {...others} />);
}

export default Component;
