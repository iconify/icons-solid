import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_cyjh5hd.css';
import '../../css/r/r8bd01bug.css';
import '../../css/d/d8mvshbpm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n_cyjh5hd"><path class="r8bd01bug"/><path class="d8mvshbpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:more-vert-square-line"} {...others} />);
}

export default Component;
