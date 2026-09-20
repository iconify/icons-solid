import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zmev91wze.css';
import '../../css/k/k8bcu_t5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="zmev91wze"/><path class="k8bcu_t5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:browser-error-404"} {...others} />);
}

export default Component;
