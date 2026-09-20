import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w-fktcb6u.css';
import '../../css/r/r0p3f-vov.css';
import '../../css/z/z2vhr6wvl.css';
import '../../css/m/m6h13lbkb.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="w-fktcb6u"/><path class="r0p3f-vov"/><path class="z2vhr6wvl"/><path class="m6h13lbkb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:rose"} {...others} />);
}

export default Component;
