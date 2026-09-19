import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cri63ezyx.css';
import '../../css/a/a_j1onboo.css';
import '../../css/f/fljkyj7pz.css';
import '../../css/d/dlkmes4xc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cri63ezyx"/><path class="a_j1onboo"/><path class="fljkyj7pz"/><path class="dlkmes4xc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:bathtub"} {...others} />);
}

export default Component;
