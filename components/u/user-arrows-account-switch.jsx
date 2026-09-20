import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/ke1-khubj.css';
import '../../css/s/sgctcobtt.css';
import '../../css/g/ghb43ybup.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ke1-khubj"/><path class="sgctcobtt"/><path class="ghb43ybup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:user-arrows-account-switch"} {...others} />);
}

export default Component;
