import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mtn5hjbmi.css';
import '../../css/g/g93bdwbpy.css';
import '../../css/f/f-4eznb8a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mtn5hjbmi"/><path class="g93bdwbpy"/><path clip-rule="evenodd" class="f-4eznb8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:phone-ring"} {...others} />);
}

export default Component;
