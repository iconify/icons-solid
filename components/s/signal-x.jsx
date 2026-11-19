import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/saxk4hu5e.css';
import '../../css/a/avs12ccis.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="saxk4hu5e"/><path class="avs12ccis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:signal-x"} {...others} />);
}

export default Component;
