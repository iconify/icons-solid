import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nijop-bue.css';
import '../../css/u/u4u9d1-mz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nijop-bue"/><path class="u4u9d1-mz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-right-left-linear"} {...others} />);
}

export default Component;
