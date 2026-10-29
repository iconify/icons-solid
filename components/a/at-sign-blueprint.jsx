import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/uiyjj6zbr.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/p/pco18stpg.css';
import '../../css/e/ez41jfban.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="uiyjj6zbr wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="pco18stpg"/><path class="ez41jfban"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:at-sign-blueprint"} {...others} />);
}

export default Component;
