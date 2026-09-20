import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kvn3d2vll.css';
import '../../css/a/ak51bicdp.css';
import '../../css/a/asmo-1zgb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kvn3d2vll"/><path class="ak51bicdp"/><path class="asmo-1zgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:squares-filled"} {...others} />);
}

export default Component;
