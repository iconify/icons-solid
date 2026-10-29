import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cktyzt25r.css';
import '../../css/c/c-oa5-aqk.css';
import '../../css/w/w4slt7qdo.css';
import '../../css/g/grs8eeboq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cktyzt25r wm-k"/><path class="c-oa5-aqk wm-k"/><path class="w4slt7qdo wm-k"/><path class="grs8eeboq wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:puzzle-piece"} {...others} />);
}

export default Component;
