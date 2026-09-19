import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ck5l6tb3a.css';
import '../../css/t/tx2p9khav.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ck5l6tb3a"/><path class="tx2p9khav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:group"} {...others} />);
}

export default Component;
