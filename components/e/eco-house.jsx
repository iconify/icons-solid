import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pxetsgolg.css';
import '../../css/x/xtug8nn5o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="pxetsgolg"/><path class="xtug8nn5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:eco-house"} {...others} />);
}

export default Component;
