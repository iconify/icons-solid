import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/buisi0gzo.css';
import '../../css/f/fvsrkp2dl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="buisi0gzo"/><path class="fvsrkp2dl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:school"} {...others} />);
}

export default Component;
