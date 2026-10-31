import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b6z_6gb_e.css';
import '../../css/s/so0nzbd7l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b6z_6gb_e"/><path class="so0nzbd7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:laptop-duocolor-round"} {...others} />);
}

export default Component;
