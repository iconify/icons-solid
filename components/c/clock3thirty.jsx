import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gt893gged.css';
import '../../css/e/eg39dacou.css';
import '../../css/t/t6cvi7g9e.css';
import '../../css/g/g_kw6w86y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gt893gged"/><path class="eg39dacou"/><path class="t6cvi7g9e"/><path class="g_kw6w86y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:clock3thirty"} {...others} />);
}

export default Component;
