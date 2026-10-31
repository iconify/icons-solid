import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yfvssccfh.css';
import '../../css/z/zetnmnv1i.css';
import '../../css/b/boscjbbog.css';
import '../../css/p/p626ffb6v.css';
import '../../css/w/we-ic1s7w.css';
import '../../css/a/awf14-b6n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow yfvssccfh"/><path class="zetnmnv1i"/><path class="boscjbbog"/><path class="p626ffb6v"/><path class="we-ic1s7w"/><path class="awf14-b6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-dog"} {...others} />);
}

export default Component;
