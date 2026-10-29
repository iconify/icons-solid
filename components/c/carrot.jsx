import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jk0i849iz.css';
import '../../css/o/oxaxv7xbl.css';
import '../../css/i/il5xq3b2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jk0i849iz"/><path class="oxaxv7xbl"/><path class="il5xq3b2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:carrot"} {...others} />);
}

export default Component;
