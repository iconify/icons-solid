import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v5dqb3mwd.css';
import '../../css/w/woxwp0iee.css';
import '../../css/k/kmu2up9oa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="v5dqb3mwd"/><path class="woxwp0iee"/><path class="kmu2up9oa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:fence"} {...others} />);
}

export default Component;
