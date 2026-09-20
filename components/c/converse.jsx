import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzgd3efjz.css';
import '../../css/d/dt6ofng9y.css';
import '../../css/t/t-grb25sy.css';
import '../../css/w/wi0q7xork.css';
import '../../css/c/c8a8l-60g.css';

const viewBox = {"width":479.591,"height":522.94};
const content = `<path class="uzgd3efjz"/><path class="dt6ofng9y"/><path class="t-grb25sy"/><path class="wi0q7xork"/><path class="c8a8l-60g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:converse"} {...others} />);
}

export default Component;
