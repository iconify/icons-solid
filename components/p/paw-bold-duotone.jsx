import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z785bw_il.css';
import '../../css/f/fjd-zv3si.css';
import '../../css/x/x7eqpdbig.css';
import '../../css/m/mcaamkbrc.css';
import '../../css/v/vlrs7zqcn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z785bw_il"/><path class="fjd-zv3si"/><path class="x7eqpdbig"/><path class="mcaamkbrc"/><path class="vlrs7zqcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:paw-bold-duotone"} {...others} />);
}

export default Component;
