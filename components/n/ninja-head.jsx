import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_d2o5wmx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j_d2o5wmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:ninja-head"} {...others} />);
}

export default Component;
