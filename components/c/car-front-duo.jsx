import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z56ok1bns.css';
import '../../css/w/wcpe8eb7b.css';
import '../../css/b/b4d1e6bie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="z56ok1bns"/><path class="wcpe8eb7b wm-a"/><path class="b4d1e6bie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:car-front-duo"} {...others} />);
}

export default Component;
