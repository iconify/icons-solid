import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/agvzadc3h.css';
import '../../css/p/ph6c3nbzo.css';
import '../../css/d/dgk0jub0h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="agvzadc3h"/><path class="ph6c3nbzo"/><path class="dgk0jub0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:settings-on"} {...others} />);
}

export default Component;
