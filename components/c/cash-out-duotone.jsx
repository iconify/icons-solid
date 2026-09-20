import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j93ro26ki.css';
import '../../css/x/xbsory7gu.css';
import '../../css/u/uo71iobjh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="j93ro26ki"/><path class="xbsory7gu"/><path class="uo71iobjh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cash-out-duotone"} {...others} />);
}

export default Component;
