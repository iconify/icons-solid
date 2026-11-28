import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yv4o3c3fe.css';
import '../../css/z/zrlq-ko1s.css';
import '../../css/e/em4jlpe0l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="yv4o3c3fe"/><path class="zrlq-ko1s"/><path class="em4jlpe0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:rss-duo"} {...others} />);
}

export default Component;
