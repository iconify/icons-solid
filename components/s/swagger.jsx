import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2ibnsbfx.css';
import '../../css/k/kb4_7ccic.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="q2ibnsbfx"/><path class="kb4_7ccic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:swagger"} {...others} />);
}

export default Component;
