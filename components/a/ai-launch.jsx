import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvhew3bau.css';
import '../../css/t/tb-x70blq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jvhew3bau"/><path class="tb-x70blq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ai-launch"} {...others} />);
}

export default Component;
