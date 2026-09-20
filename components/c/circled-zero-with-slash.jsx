import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_weg3b7j.css';
import '../../css/s/sxsjrzbyv.css';
import '../../css/g/goyqnobna.css';
import '../../css/r/r38bcib6d.css';
import '../../css/u/uhe3f6bup.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="j_weg3b7j"/><g class="sxsjrzbyv"><circle class="goyqnobna"/><path class="r38bcib6d"/><path clip-rule="evenodd" class="uhe3f6bup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:circled-zero-with-slash"} {...others} />);
}

export default Component;
