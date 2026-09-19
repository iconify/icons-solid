import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhnf1kbvb.css';
import '../../css/c/ccs4fgbgr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rhnf1kbvb"/><path class="ccs4fgbgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-copy-outline"} {...others} />);
}

export default Component;
