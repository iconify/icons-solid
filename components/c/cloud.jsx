import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s9n-rccba.css';
import '../../css/e/ez7bfxbbf.css';
import '../../css/j/j45b4b0vz.css';
import '../../css/v/vk1xbsbgc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s9n-rccba"/><path class="ez7bfxbbf"/><path class="j45b4b0vz"/><path class="vk1xbsbgc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cloud"} {...others} />);
}

export default Component;
