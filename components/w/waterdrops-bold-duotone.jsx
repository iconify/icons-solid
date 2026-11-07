import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nq3ocyl1l.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/h/hibe8qwor.css';
import '../../css/f/f-wf32bmx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nq3ocyl1l"/><g class="xtpeb-edw"><path class="hibe8qwor"/><path class="f-wf32bmx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:waterdrops-bold-duotone"} {...others} />);
}

export default Component;
