import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kb6wl9bmp.css';
import '../../css/x/xupe-9x0p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kb6wl9bmp"/><path class="xupe-9x0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:chevron-circle-left-alt"} {...others} />);
}

export default Component;
