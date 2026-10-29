import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ophjgibpm.css';
import '../../css/n/nb382m2ib.css';
import '../../css/p/phawmubhy.css';
import '../../css/k/k0tm63b0s.css';
import '../../css/v/vvmccbmmh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ophjgibpm"/><path class="nb382m2ib"/><path class="phawmubhy wm-a"/><path class="k0tm63b0s"/><path class="vvmccbmmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paintbrush-duo"} {...others} />);
}

export default Component;
