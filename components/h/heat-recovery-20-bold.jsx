import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvlc-tsag.css';
import '../../css/d/d60aetbtw.css';
import '../../css/r/rcl7udk4b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jvlc-tsag"/><path class="d60aetbtw"/><path class="rcl7udk4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-recovery-20-bold"} {...others} />);
}

export default Component;
