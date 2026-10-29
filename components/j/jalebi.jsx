import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jy9njbjlp.css';
import '../../css/u/u_9uqpblx.css';
import '../../css/t/tbl_t3tsa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jy9njbjlp"/><path class="u_9uqpblx"/><path class="tbl_t3tsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:jalebi"} {...others} />);
}

export default Component;
