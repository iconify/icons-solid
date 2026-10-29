import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tsgnk6b9n.css';
import '../../css/p/p77vdobsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="tsgnk6b9n"/><path class="p77vdobsr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:settings-2"} {...others} />);
}

export default Component;
