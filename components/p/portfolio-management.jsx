import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwlbj0b8j.css';
import '../../css/q/q1p1kwjdw.css';
import '../../css/m/m1y4hsbgq.css';
import '../../css/v/vh1dgbcue.css';
import '../../css/t/tzrsdpb2g.css';
import '../../css/m/mxv0-rl9y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fwlbj0b8j"/><path class="q1p1kwjdw"/><circle class="m1y4hsbgq"/><circle class="vh1dgbcue"/><path class="tzrsdpb2g"/><path class="mxv0-rl9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:portfolio-management"} {...others} />);
}

export default Component;
