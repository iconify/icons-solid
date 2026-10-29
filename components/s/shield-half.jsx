import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jbsj7qldv.css';
import '../../css/x/xj_7x3bof.css';
import '../../css/v/vfh7br68s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jbsj7qldv"/><path class="xj_7x3bof"/><path class="vfh7br68s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:shield-half"} {...others} />);
}

export default Component;
