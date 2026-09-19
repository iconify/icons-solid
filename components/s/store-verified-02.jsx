import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x33_jggdd.css';
import '../../css/o/oyv5vuy7b.css';
import '../../css/i/i0f6gkbhm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x33_jggdd"/><path class="oyv5vuy7b"/><path class="i0f6gkbhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:store-verified-02"} {...others} />);
}

export default Component;
