import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/re-nm7b9x.css';
import '../../css/f/fcd9fub-m.css';
import '../../css/l/lc-745xnc.css';
import '../../css/x/xquyf4b9c.css';
import '../../css/t/tokuqsu-n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="re-nm7b9x"/><path class="fcd9fub-m"/><path class="lc-745xnc"/><path class="xquyf4b9c"/><path class="tokuqsu-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hook0"} {...others} />);
}

export default Component;
