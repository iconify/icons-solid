import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xdj82wxwd.css';
import '../../css/k/kr_8yqlhq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xdj82wxwd"/><path class="kr_8yqlhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:bag-handle-outline"} {...others} />);
}

export default Component;
