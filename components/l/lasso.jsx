import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tipxp9bql.css';
import '../../css/f/f7dvesxfn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="tipxp9bql wm-k"/><path class="f7dvesxfn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:lasso"} {...others} />);
}

export default Component;
