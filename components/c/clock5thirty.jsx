import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gt893gged.css';
import '../../css/e/eg39dacou.css';
import '../../css/r/rc5x6vdrd.css';
import '../../css/d/dsx4j5bsa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gt893gged"/><path class="eg39dacou"/><path class="rc5x6vdrd"/><path class="dsx4j5bsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:clock5thirty"} {...others} />);
}

export default Component;
