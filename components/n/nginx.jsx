import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xqutpcb2e.css';
import '../../css/i/itzswk0_f.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="xqutpcb2e"/><path class="itzswk0_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:nginx"} {...others} />);
}

export default Component;
