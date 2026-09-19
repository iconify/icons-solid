import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ff_8p9-to.css';
import '../../css/e/e8au8db-s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ff_8p9-to"/><path class="e8au8db-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:triangularruler"} {...others} />);
}

export default Component;
