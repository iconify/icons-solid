import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/ohmpddcnv.css';
import '../../css/j/jun0cu4td.css';
import '../../css/n/nhiwcxnik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ohmpddcnv wm-shadow"/><path class="jun0cu4td wm-shadow"/><path class="nhiwcxnik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:dumbbell"} {...others} />);
}

export default Component;
