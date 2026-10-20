import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/an6cwhv_g.css';
import '../../css/q/qczb-hlmy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="an6cwhv_g"/><path class="qczb-hlmy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:door-open"} {...others} />);
}

export default Component;
