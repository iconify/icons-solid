import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tddl24bqp.css';
import '../../css/g/g5wy8tb4y.css';
import '../../css/k/kvjcaymdv.css';
import '../../css/j/jsxg4l9cg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="tddl24bqp wm-shadow"/><path class="g5wy8tb4y wm-shadow"/><path class="kvjcaymdv"/><path class="jsxg4l9cg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:brain"} {...others} />);
}

export default Component;
