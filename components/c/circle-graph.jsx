import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ezzxpublb.css';
import '../../css/h/h60yxfbqg.css';
import '../../css/e/eur9_vb7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ezzxpublb"/><path class="h60yxfbqg"/><path class="eur9_vb7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:circle-graph"} {...others} />);
}

export default Component;
