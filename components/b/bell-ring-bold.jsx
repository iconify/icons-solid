import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xqlemybcl.css';
import '../../css/t/tjaak3z0c.css';
import '../../css/j/jo5f2oxyf.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xqlemybcl"/><path clip-rule="evenodd" class="tjaak3z0c"/><path class="jo5f2oxyf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bell-ring-bold"} {...others} />);
}

export default Component;
