import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3cv_cc6k.css';
import '../../css/j/jaih09bxv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h3cv_cc6k"/><path class="jaih09bxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:power-standby"} {...others} />);
}

export default Component;
