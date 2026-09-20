import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to5_hpm1w.css';
import '../../css/l/ll9drew8d.css';
import '../../css/z/zpz1nibrh.css';
import '../../css/l/llwpxte8n.css';
import '../../css/w/w03bybb9l.css';
import '../../css/w/wcz8eob2d.css';
import '../../css/m/mxem4c_4h.css';
import '../../css/t/tai39684i.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="to5_hpm1w"><path class="ll9drew8d"/><path clip-rule="evenodd" class="zpz1nibrh"/></g><path clip-rule="evenodd" class="llwpxte8n"/><path class="w03bybb9l"/><path clip-rule="evenodd" class="wcz8eob2d"/><path class="mxem4c_4h"/><path class="tai39684i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cool-button"} {...others} />);
}

export default Component;
