import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qf0v5jb1s.css';
import '../../css/q/qq0qwkbww.css';
import '../../css/n/nd3t4gqyr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qf0v5jb1s"/><path class="qq0qwkbww"/><path class="nd3t4gqyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bag-happy"} {...others} />);
}

export default Component;
