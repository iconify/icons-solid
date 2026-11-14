import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cwqybm13b.css';
import '../../css/w/wbdy8gb0y.css';
import '../../css/k/k4xam1b7e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cwqybm13b"/><path class="wbdy8gb0y"/><path class="k4xam1b7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:question"} {...others} />);
}

export default Component;
