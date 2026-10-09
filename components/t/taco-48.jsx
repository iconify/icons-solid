import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dqn9w_jlc.css';
import '../../css/e/e2_8yl1ds.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dqn9w_jlc"/><path class="e2_8yl1ds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:taco-48"} {...others} />);
}

export default Component;
