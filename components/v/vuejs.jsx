import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qaaxbibek.css';
import '../../css/h/h-b6q9b2h.css';
import '../../css/g/gueqvmrxi.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="qaaxbibek"/><path class="h-b6q9b2h"/><path class="gueqvmrxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:vuejs"} {...others} />);
}

export default Component;
