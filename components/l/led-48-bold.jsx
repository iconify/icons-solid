import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fsp_74b5t.css';
import '../../css/p/p95ug3i0a.css';
import '../../css/h/h0fjfvbhi.css';
import '../../css/m/mpsu6eb-c.css';
import '../../css/d/dze8s_bvr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fsp_74b5t"/><path class="p95ug3i0a"/><path class="h0fjfvbhi"/><path class="mpsu6eb-c"/><path class="dze8s_bvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:led-48-bold"} {...others} />);
}

export default Component;
