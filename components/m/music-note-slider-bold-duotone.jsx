import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/o/ojdl96y2v.css';
import '../../css/r/r5pybk82q.css';
import '../../css/p/peg0m9y2g.css';
import '../../css/h/h34bhmoma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="ojdl96y2v"/><path class="r5pybk82q"/></g><path class="peg0m9y2g"/><path clip-rule="evenodd" class="h34bhmoma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-note-slider-bold-duotone"} {...others} />);
}

export default Component;
