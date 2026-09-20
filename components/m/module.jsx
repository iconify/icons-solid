import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/c/c_-cxlk0e.css';
import '../../css/g/gt8-fu3gr.css';
import '../../css/y/yn_r-dbzv.css';
import '../../css/d/djptb_roy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="c_-cxlk0e"/><path class="gt8-fu3gr"/><path class="yn_r-dbzv"/><path class="djptb_roy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:module"} {...others} />);
}

export default Component;
