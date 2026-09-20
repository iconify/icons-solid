import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hpwm64sav.css';
import '../../css/i/idi4jubzr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="hpwm64sav"/><path class="idi4jubzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:copy-link"} {...others} />);
}

export default Component;
