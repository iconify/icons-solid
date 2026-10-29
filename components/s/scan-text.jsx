import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l9lv5_bcf.css';
import '../../css/l/le4nw3b-s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="l9lv5_bcf"/><path class="le4nw3b-s wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:scan-text"} {...others} />);
}

export default Component;
