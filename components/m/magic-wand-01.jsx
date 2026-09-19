import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/g/g0oiieo4d.css';
import '../../css/i/ig5a48g4q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="g0oiieo4d"/><path class="ig5a48g4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:magic-wand-01"} {...others} />);
}

export default Component;
