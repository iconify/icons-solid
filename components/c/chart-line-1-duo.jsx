import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gxzbgobiv.css';
import '../../css/d/dzfojk_yo.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="gxzbgobiv"/><path class="dzfojk_yo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:chart-line-1-duo"} {...others} />);
}

export default Component;
