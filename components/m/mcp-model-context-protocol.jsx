import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nx5d-bc1s.css';
import '../../css/h/hd70nsb5x.css';
import '../../css/u/u2hv0zbsy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nx5d-bc1s"><path class="hd70nsb5x"/><path class="u2hv0zbsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mcp-model-context-protocol"} {...others} />);
}

export default Component;
