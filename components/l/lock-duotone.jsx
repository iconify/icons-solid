import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8-2tuzad.css';
import '../../css/l/l-sre730b.css';
import '../../css/y/ygox79bep.css';
import '../../css/e/e7x9otzxy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r8-2tuzad"/><path class="l-sre730b"/><circle class="ygox79bep"/><path class="e7x9otzxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:lock-duotone"} {...others} />);
}

export default Component;
