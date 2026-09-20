import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_xhkgbdq.css';
import '../../css/j/j--gjob4x.css';

const viewBox = {"width":256,"height":308};
const content = `<path class="s_xhkgbdq"/><path class="j--gjob4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:svelte"} {...others} />);
}

export default Component;
