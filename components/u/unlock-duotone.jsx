import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8-2tuzad.css';
import '../../css/y/ygox79bep.css';
import '../../css/e/e7x9otzxy.css';
import '../../css/r/rcbqswbul.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r8-2tuzad"/><circle class="ygox79bep"/><path class="e7x9otzxy"/><path class="rcbqswbul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:unlock-duotone"} {...others} />);
}

export default Component;
