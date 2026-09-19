import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/w/wkk1f-b-h.css';
import '../../css/g/ge1mxvm8x.css';
import '../../css/h/hsmz4cbpa.css';
import '../../css/j/j5wf84hfz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="wkk1f-b-h"/><path class="ge1mxvm8x"/><path class="hsmz4cbpa"/><path class="j5wf84hfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:shuffle-one"} {...others} />);
}

export default Component;
