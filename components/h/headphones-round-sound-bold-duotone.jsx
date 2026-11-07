import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x35xwlb8d.css';
import '../../css/q/qe32f93df.css';
import '../../css/m/m3vancc3p.css';
import '../../css/j/jgax7j6rw.css';
import '../../css/r/rvwmhnb9r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x35xwlb8d"/><g clip-rule="evenodd" class="qe32f93df"><path class="m3vancc3p"/><path class="jgax7j6rw"/><path class="rvwmhnb9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:headphones-round-sound-bold-duotone"} {...others} />);
}

export default Component;
