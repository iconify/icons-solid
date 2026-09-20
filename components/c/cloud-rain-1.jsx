import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/m/mh0ro1bvn.css';
import '../../css/b/b9my82brg.css';
import '../../css/q/q2jufojrz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="mh0ro1bvn"/><path class="b9my82brg"/><path class="q2jufojrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:cloud-rain-1"} {...others} />);
}

export default Component;
