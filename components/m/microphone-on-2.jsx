import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cl7y4inub.css';
import '../../css/f/fxapsu19g.css';
import '../../css/p/pritg-b0k.css';
import '../../css/r/r_1lrbbxd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cl7y4inub"/><path class="fxapsu19g"/><path class="pritg-b0k"/><path class="r_1lrbbxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:microphone-on-2"} {...others} />);
}

export default Component;
