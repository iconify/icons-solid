import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/az6csdqgz.css';
import '../../css/k/kmcgoyf5b.css';
import '../../css/j/jm1lb0omt.css';
import '../../css/d/dswk5-x-u.css';
import '../../css/s/s805e4aqh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="az6csdqgz"/><path class="kmcgoyf5b"/><path class="jm1lb0omt"/><path class="dswk5-x-u"/><path class="s805e4aqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:id-card-duotone"} {...others} />);
}

export default Component;
