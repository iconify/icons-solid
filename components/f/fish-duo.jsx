import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nh0u_v32h.css';
import '../../css/f/fm32n2byj.css';
import '../../css/b/bq6kxj32x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="nh0u_v32h"/><path class="fm32n2byj wm-a"/><path class="bq6kxj32x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:fish-duo"} {...others} />);
}

export default Component;
