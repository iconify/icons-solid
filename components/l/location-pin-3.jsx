import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q2y7eorwr.css';
import '../../css/b/bjb9rabxp.css';
import '../../css/y/y9coysbwj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="q2y7eorwr"/><path class="bjb9rabxp"/><path class="y9coysbwj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:location-pin-3"} {...others} />);
}

export default Component;
