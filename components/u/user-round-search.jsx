import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h271qpb9e.css';
import '../../css/f/f0kec1b7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h271qpb9e"/><path class="f0kec1b7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-round-search"} {...others} />);
}

export default Component;
