import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rciwx7bwu.css';
import '../../css/y/ym3jfkbrh.css';
import '../../css/r/rmme9m09l.css';
import '../../css/g/g0h8z3bqp.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="rciwx7bwu"/><path class="ym3jfkbrh"/><path class="rmme9m09l"/><path class="g0h8z3bqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:gitlab"} {...others} />);
}

export default Component;
