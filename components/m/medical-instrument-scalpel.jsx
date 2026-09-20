import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b4i4ecc8t.css';
import '../../css/j/jcp5cxblp.css';
import '../../css/c/ce647lk3f.css';
import '../../css/m/mrg2o8b6n.css';
import '../../css/h/hzpulb-3p.css';
import '../../css/b/byi3wxb0s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b4i4ecc8t"/><path class="jcp5cxblp"/><path class="ce647lk3f"/><path class="mrg2o8b6n"/><path class="hzpulb-3p"/><path class="byi3wxb0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:medical-instrument-scalpel"} {...others} />);
}

export default Component;
