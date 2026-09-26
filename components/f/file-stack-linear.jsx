import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x0c9_4bxl.css';
import '../../css/j/j1fclisuo.css';
import '../../css/y/yx6546bzc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x0c9_4bxl"/><path class="j1fclisuo"/><path class="yx6546bzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-stack-linear"} {...others} />);
}

export default Component;
