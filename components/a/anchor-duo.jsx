import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvtmaim2s.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y9n9pbc4q.css';
import '../../css/h/h_4d8jb-p.css';
import '../../css/w/wo3xrrbug.css';
import '../../css/r/rzhs8zm0g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary tvtmaim2s"/><g class="dt0cm9dhy primary"><circle class="y9n9pbc4q"/><path class="h_4d8jb-p"/><path class="wo3xrrbug"/><path class="rzhs8zm0g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:anchor-duo"} {...others} />);
}

export default Component;
