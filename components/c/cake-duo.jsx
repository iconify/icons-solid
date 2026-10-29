import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/glu6ctuav.css';
import '../../css/i/ih89_ofxe.css';
import '../../css/d/d-2d-2bes.css';
import '../../css/y/yhtn9ti7t.css';
import '../../css/r/rmojd5b3e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="glu6ctuav"/><path class="ih89_ofxe wm-a"/><path class="d-2d-2bes wm-a"/><path class="yhtn9ti7t"/><path class="rmojd5b3e wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cake-duo"} {...others} />);
}

export default Component;
