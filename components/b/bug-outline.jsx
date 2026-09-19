import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-kgrhb0e.css';
import '../../css/c/clr-_gv_i.css';
import '../../css/p/ptl4ptbdc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n-kgrhb0e"/><path class="clr-_gv_i"/><path class="ptl4ptbdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:bug-outline"} {...others} />);
}

export default Component;
