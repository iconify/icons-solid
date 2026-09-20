import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ry40d-87g.css';
import '../../css/c/cj-4sbbcy.css';
import '../../css/c/cqj30chyk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ry40d-87g"/><path class="cj-4sbbcy"/><path class="cqj30chyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:palette-line"} {...others} />);
}

export default Component;
