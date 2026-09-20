import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hf_vqb6ra.css';
import '../../css/u/ufnji5p1c.css';
import '../../css/x/xec2qh1xw.css';
import '../../css/k/k9hgj4wof.css';
import '../../css/y/yj-l38s9d.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="hf_vqb6ra"/><path class="ufnji5p1c"/><path class="xec2qh1xw"/><path class="k9hgj4wof"/><path class="yj-l38s9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:opencl"} {...others} />);
}

export default Component;
