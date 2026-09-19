import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fzkpz1bdj.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="fzkpz1bdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:hand-holding-medical"} {...others} />);
}

export default Component;
