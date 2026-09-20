import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sbope9bia.css';
import '../../css/d/d3i2mgbjs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><circle class="sbope9bia"/><path clip-rule="evenodd" class="d3i2mgbjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:progress"} {...others} />);
}

export default Component;
