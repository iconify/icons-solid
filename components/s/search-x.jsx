import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k9bwl5bod.css';
import '../../css/z/zlabp6b3m.css';
import '../../css/k/ke31klbxe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="k9bwl5bod"/><path class="zlabp6b3m"/><path class="ke31klbxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:search-x"} {...others} />);
}

export default Component;
