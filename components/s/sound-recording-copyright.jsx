import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_weg3b7j.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/w/wcwvfmbxf.css';
import '../../css/t/t88bgcc7d.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="j_weg3b7j"/><g class="rpvb-o6bq"><circle class="wcwvfmbxf"/><path clip-rule="evenodd" class="t88bgcc7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sound-recording-copyright"} {...others} />);
}

export default Component;
