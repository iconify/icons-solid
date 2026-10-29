import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/doivh7blh.css';
import '../../css/f/fcpcu9i2b.css';
import '../../css/j/jura4nbok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="doivh7blh"/><path class="fcpcu9i2b wm-a"/><path class="jura4nbok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:magnet-duo"} {...others} />);
}

export default Component;
