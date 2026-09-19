import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r1be0yome.css';
import '../../css/r/rw774fujl.css';
import '../../css/k/k6w4hkbjm.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="d2kvgvbvc"><path class="r1be0yome"/><path class="rw774fujl"/><path class="k6w4hkbjm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:td-1x1"} {...others} />);
}

export default Component;
