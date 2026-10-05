import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/gxx9aj57l.css';
import '../../css/i/i3l0rvbjp.css';
import '../../css/e/e0pys6b2e.css';
import '../../css/a/a876wccoe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="gxx9aj57l"/><path class="i3l0rvbjp"/><path class="e0pys6b2e"/><path class="a876wccoe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:at-sign"} {...others} />);
}

export default Component;
