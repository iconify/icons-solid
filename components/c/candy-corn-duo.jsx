import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ag0k35b8i.css';
import '../../css/w/w66wkzmab.css';
import '../../css/q/qcthsjb1c.css';
import '../../css/a/a4vjoxyvs.css';
import '../../css/d/dxfilmbdx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ag0k35b8i"/><path class="w66wkzmab wm-a"/><path class="qcthsjb1c"/><path class="a4vjoxyvs wm-a"/><path class="dxfilmbdx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:candy-corn-duo"} {...others} />);
}

export default Component;
