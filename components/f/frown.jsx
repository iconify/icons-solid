import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nu4l1pb_j.css';
import '../../css/v/vlw-11bxf.css';
import '../../css/f/f79c0l7xv.css';
import '../../css/y/ye89lobfr.css';
import '../../css/j/jwb9hbq1b.css';
import '../../css/v/vh4ffm5yo.css';
import '../../css/d/drkj6zauj.css';
import '../../css/o/o0htqabie.css';
import '../../css/f/fkvi5jjnx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nu4l1pb_j wm-k"/><path class="vlw-11bxf wm-k"/><path class="f79c0l7xv wm-k"/><path class="wm-k ye89lobfr"/><path class="jwb9hbq1b wm-a"/><path class="vh4ffm5yo wm-shine"/><path class="drkj6zauj wm-a"/><path class="o0htqabie wm-deco"/><path class="fkvi5jjnx wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:frown"} {...others} />);
}

export default Component;
