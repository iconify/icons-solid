import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ebwprabbp.css';
import '../../css/o/ouj0i7wlf.css';
import '../../css/f/f-uqvvbcb.css';
import '../../css/p/pp3u-tenb.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ebwprabbp"/><path class="ouj0i7wlf"/><path class="f-uqvvbcb"/><path class="pp3u-tenb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:phone-shield"} {...others} />);
}

export default Component;
