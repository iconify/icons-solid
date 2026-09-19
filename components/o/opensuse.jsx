import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0n8thbpp.css';
import '../../css/a/azwi-ublj.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="q0n8thbpp"/><path class="azwi-ublj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:opensuse"} {...others} />);
}

export default Component;
