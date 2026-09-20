import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w_mp-xmba.css';
import '../../css/x/xo2e8ob7g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="w_mp-xmba"/><path class="xo2e8ob7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bag-shopping-filled"} {...others} />);
}

export default Component;
