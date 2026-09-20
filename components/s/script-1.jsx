import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d98b-4bhw.css';
import '../../css/z/zz0w94bev.css';
import '../../css/s/s4e3h56ks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="d98b-4bhw"/><path class="zz0w94bev"/><path class="s4e3h56ks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:script-1"} {...others} />);
}

export default Component;
