import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h344ikbje.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/axayjezpl.css';
import '../../css/z/zxqyewwth.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h344ikbje secondary"/><g class="dt0cm9dhy primary"><path class="axayjezpl"/><path class="zxqyewwth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:map-pin-check-duo"} {...others} />);
}

export default Component;
