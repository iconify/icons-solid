import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kvktdgbql.css';
import '../../css/f/flpvl3bhd.css';
import '../../css/j/jbzkjmbbh.css';
import '../../css/v/v1zp_fbha.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kvktdgbql"/><path class="flpvl3bhd"/><path class="jbzkjmbbh"/><path class="v1zp_fbha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:playback-speed-duotone"} {...others} />);
}

export default Component;
