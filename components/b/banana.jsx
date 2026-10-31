import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/p1d41nh3q.css';
import '../../css/m/m5svt1k4u.css';
import '../../css/l/l5qox53dc.css';
import '../../css/m/modyrobku.css';
import '../../css/j/jmg5kjbns.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="p1d41nh3q wm-shadow"/><path class="m5svt1k4u"/><path class="l5qox53dc"/><path class="modyrobku"/><path class="jmg5kjbns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:banana"} {...others} />);
}

export default Component;
