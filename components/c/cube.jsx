import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c75qik9xb.css';
import '../../css/q/qnp7mza7z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="c75qik9xb"/><path class="qnp7mza7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:cube"} {...others} />);
}

export default Component;
