import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/atmzkckly.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gtipehbld.css';
import '../../css/w/w-t6mzbal.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="atmzkckly secondary"/><g class="dt0cm9dhy primary"><path class="gtipehbld"/><path class="w-t6mzbal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:message-pen-duo"} {...others} />);
}

export default Component;
