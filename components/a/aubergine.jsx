import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-roltbpz.css';
import '../../css/t/thf8vdb1b.css';
import '../../css/o/oxcajzmoz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u-roltbpz"/><path class="thf8vdb1b"/><path class="oxcajzmoz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:aubergine"} {...others} />);
}

export default Component;
