import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hww0nz56s.css';
import '../../css/g/gc4-anb8e.css';
import '../../css/j/j924fnbja.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="hww0nz56s"/><path class="gc4-anb8e"/><path clip-rule="evenodd" class="j924fnbja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:turkic-states"} {...others} />);
}

export default Component;
