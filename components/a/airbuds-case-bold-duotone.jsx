import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cng445bcg.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/v/v046j2erx.css';
import '../../css/h/hzza3-bxa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cng445bcg"/><g class="xtpeb-edw"><path class="v046j2erx"/><path class="hzza3-bxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-case-bold-duotone"} {...others} />);
}

export default Component;
