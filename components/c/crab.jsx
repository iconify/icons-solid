import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xc-svt7gp.css';
import '../../css/y/y0ulzgbpm.css';
import '../../css/v/vbgdlybic.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xc-svt7gp"/><ellipse class="y0ulzgbpm"/><path class="vbgdlybic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:crab"} {...others} />);
}

export default Component;
