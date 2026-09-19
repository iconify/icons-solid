import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uflu5fb4a.css';
import '../../css/d/d4bpu0bvk.css';
import '../../css/j/jrp9cab6c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="uflu5fb4a"/><path class="d4bpu0bvk"/><path class="jrp9cab6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:location-user-04"} {...others} />);
}

export default Component;
