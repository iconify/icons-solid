import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/j/j0qrprddi.css';
import '../../css/w/wo-jssbrk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect class="j0qrprddi"/><path class="wo-jssbrk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:bug"} {...others} />);
}

export default Component;
