import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ub82tgj1c.css';
import '../../css/e/espyn4ruh.css';
import '../../css/r/rafv6nmhg.css';
import '../../css/l/l-v98ya4l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ub82tgj1c"/><path class="espyn4ruh"/><path class="rafv6nmhg"/><circle class="l-v98ya4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:inputsymbolforsymbols"} {...others} />);
}

export default Component;
