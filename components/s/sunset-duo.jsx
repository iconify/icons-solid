import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w2k2yd7ef.css';
import '../../css/f/ftqu8dbux.css';
import '../../css/c/c1xzn3b5a.css';
import '../../css/s/sxdzfouvy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="w2k2yd7ef"/><path class="ftqu8dbux wm-s"/><path class="c1xzn3b5a"/><path class="sxdzfouvy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sunset-duo"} {...others} />);
}

export default Component;
