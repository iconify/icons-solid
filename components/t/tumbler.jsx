import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/aink3vbmj.css';
import '../../css/o/osn-tobkz.css';
import '../../css/f/fsmuwe8bo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="aink3vbmj"/><path class="osn-tobkz"/><path class="fsmuwe8bo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:tumbler"} {...others} />);
}

export default Component;
