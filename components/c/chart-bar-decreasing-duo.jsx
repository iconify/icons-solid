import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f4so9hbwp.css';
import '../../css/s/skn8acc-z.css';
import '../../css/c/c0bw40ovn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="f4so9hbwp"/><path class="skn8acc-z wm-a"/><path class="c0bw40ovn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-bar-decreasing-duo"} {...others} />);
}

export default Component;
