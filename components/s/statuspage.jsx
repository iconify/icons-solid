import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nt7tskbwm.css';
import '../../css/o/ol788r1ej.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="nt7tskbwm"/><path class="ol788r1ej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:statuspage"} {...others} />);
}

export default Component;
