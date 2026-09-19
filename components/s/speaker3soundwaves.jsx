import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bkbdgob_u.css';
import '../../css/b/ba4pmswhb.css';
import '../../css/k/kvokd1fvk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bkbdgob_u"/><path class="ba4pmswhb"/><path class="kvokd1fvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:speaker3soundwaves"} {...others} />);
}

export default Component;
