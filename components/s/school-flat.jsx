import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xjlwibcff.css';
import '../../css/z/z3pb2hbgm.css';
import '../../css/o/oqirhj0rv.css';
import '../../css/h/hqyygc21n.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xjlwibcff"/><path clip-rule="evenodd" class="z3pb2hbgm"/><path clip-rule="evenodd" class="oqirhj0rv"/><path class="hqyygc21n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:school-flat"} {...others} />);
}

export default Component;
