import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dds8dacon.css';
import '../../css/m/mbnbiobpz.css';
import '../../css/l/lu-kft6oz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="dds8dacon"/><path class="mbnbiobpz wm-a"/><path class="lu-kft6oz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:layers"} {...others} />);
}

export default Component;
