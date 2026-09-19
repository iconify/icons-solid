import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iypdcyvhg.css';
import '../../css/u/ue-60pbsu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iypdcyvhg"/><path class="ue-60pbsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:loop"} {...others} />);
}

export default Component;
