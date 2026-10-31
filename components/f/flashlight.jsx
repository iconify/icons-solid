import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/ihhuy1bah.css';
import '../../css/r/rhm6wmbpy.css';
import '../../css/l/lj3-5cbae.css';
import '../../css/c/c3atbbrac.css';
import '../../css/k/kic-dzbsm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ihhuy1bah wm-shadow"/><path class="rhm6wmbpy wm-shadow"/><path class="lj3-5cbae"/><path class="c3atbbrac"/><path class="kic-dzbsm wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:flashlight"} {...others} />);
}

export default Component;
