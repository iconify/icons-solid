import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hh6tl_orr.css';
import '../../css/s/spj3602hu.css';
import '../../css/n/nn2sdrbun.css';
import '../../css/g/go5n_1h8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="hh6tl_orr"/><path class="spj3602hu wm-a"/><path class="nn2sdrbun"/><path class="go5n_1h8p wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:battery-full-duo"} {...others} />);
}

export default Component;
