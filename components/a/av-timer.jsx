import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0tegibop.css';
import '../../css/l/ln3y43bhc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d0tegibop"/><path class="ln3y43bhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:av-timer"} {...others} />);
}

export default Component;
