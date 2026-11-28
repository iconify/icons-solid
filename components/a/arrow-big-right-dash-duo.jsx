import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ews8m83sk.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zde---bwt.css';
import '../../css/e/esbmfdf6a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ews8m83sk secondary"/><g class="dt0cm9dhy primary"><path class="zde---bwt"/><path class="esbmfdf6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-big-right-dash-duo"} {...others} />);
}

export default Component;
