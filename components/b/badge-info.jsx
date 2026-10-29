import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rxln7ub1f.css';
import '../../css/c/crwetj7pb.css';
import '../../css/w/w_klg8-fu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="rxln7ub1f"/><path class="crwetj7pb"/><path class="w_klg8-fu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:badge-info"} {...others} />);
}

export default Component;
