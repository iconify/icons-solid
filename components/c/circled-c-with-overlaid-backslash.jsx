import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_weg3b7j.css';
import '../../css/s/sxsjrzbyv.css';
import '../../css/d/d0bf9jbax.css';
import '../../css/g/goyqnobna.css';
import '../../css/r/reogukpic.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="j_weg3b7j"/><g class="sxsjrzbyv"><path clip-rule="evenodd" class="d0bf9jbax"/><circle class="goyqnobna"/><path class="reogukpic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:circled-c-with-overlaid-backslash"} {...others} />);
}

export default Component;
