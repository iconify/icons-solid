import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-2ge42fi.css';
import '../../css/l/llfj4f_hk.css';

const viewBox = {"width":256,"height":256};
const content = `<path clip-rule="evenodd" class="e-2ge42fi"/><path class="llfj4f_hk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:devto-light"} {...others} />);
}

export default Component;
