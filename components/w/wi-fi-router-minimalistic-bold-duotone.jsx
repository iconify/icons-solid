import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/a/awfs1dbya.css';
import '../../css/p/p5yzyacqb.css';
import '../../css/q/qla0packm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="awfs1dbya"/><path class="p5yzyacqb"/></g><path clip-rule="evenodd" class="qla0packm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-router-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
