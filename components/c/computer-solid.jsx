import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vzo9mcduf.css';
import '../../css/n/nguoz603s.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="vzo9mcduf"/><path clip-rule="evenodd" class="nguoz603s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:computer-solid"} {...others} />);
}

export default Component;
