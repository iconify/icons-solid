import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/igjudsbww.css';
import '../../css/u/u4chfjbjl.css';
import '../../css/z/z1gfgnbxc.css';
import '../../css/d/d93tk7y8k.css';
import '../../css/a/ab2d1gbfg.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGW7L6Ae1W"><g class="igjudsbww"><path class="u4chfjbjl"/><path class="z1gfgnbxc"/><path class="d93tk7y8k"/><path class="ab2d1gbfg"/></g></mask></defs><path mask="url(#SVGW7L6Ae1W)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:time-progress-duotone-line"} {...others} />);
}

export default Component;
