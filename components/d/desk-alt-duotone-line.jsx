import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aph6q2bxw.css';
import '../../css/z/zs5t2abgl.css';
import '../../css/c/cvpnadiui.css';
import '../../css/c/cogexj8lf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="aph6q2bxw"/><path class="zs5t2abgl"/><path class="cvpnadiui"/><path class="cogexj8lf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:desk-alt-duotone-line"} {...others} />);
}

export default Component;
