import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/ur_u66b0l.css';
import '../../css/q/qq0qwkbww.css';
import '../../css/n/nd3t4gqyr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ur_u66b0l"/><path class="qq0qwkbww"/><path class="nd3t4gqyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bag-cross"} {...others} />);
}

export default Component;
