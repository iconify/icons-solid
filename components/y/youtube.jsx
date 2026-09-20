import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b9lmaabmr.css';
import '../../css/b/bndj564er.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b9lmaabmr"/><path class="bndj564er"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:youtube"} {...others} />);
}

export default Component;
