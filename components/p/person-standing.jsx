import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fevjc7byl.css';
import '../../css/b/b34-l4b9r.css';
import '../../css/m/mlc47qbfp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fevjc7byl"/><path class="b34-l4b9r"/><path class="mlc47qbfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:person-standing"} {...others} />);
}

export default Component;
