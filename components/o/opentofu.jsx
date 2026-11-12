import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mex8whbii.css';
import '../../css/p/px1tg2dxt.css';
import '../../css/a/a2knz85gk.css';
import '../../css/q/q_9c60btz.css';
import '../../css/y/y78fs-s1i.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="mex8whbii"/><path class="px1tg2dxt"/><path class="a2knz85gk"/><path class="q_9c60btz"/><path class="y78fs-s1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:opentofu"} {...others} />);
}

export default Component;
