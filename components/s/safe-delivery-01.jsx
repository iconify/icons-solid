import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/feusg2b6l.css';
import '../../css/s/se7-jc0kz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="feusg2b6l"/><path class="se7-jc0kz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:safe-delivery-01"} {...others} />);
}

export default Component;
