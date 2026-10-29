import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t8j30dbrd.css';
import '../../css/c/cesv1tf_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="t8j30dbrd wm-k"/><path class="cesv1tf_n wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:filter-x"} {...others} />);
}

export default Component;
