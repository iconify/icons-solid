import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g1rmqcb6r.css';
import '../../css/o/o-aolgbja.css';
import '../../css/o/om6-cnkwr.css';
import '../../css/i/i6pwf4bws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="g1rmqcb6r wm-shadow"/><path class="o-aolgbja"/><path class="om6-cnkwr"/><path class="i6pwf4bws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:git-branch"} {...others} />);
}

export default Component;
