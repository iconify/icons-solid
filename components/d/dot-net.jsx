import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v5rupt_8i.css';

const viewBox = {"width":128,"height":128};
const content = `<path clip-rule="evenodd" class="v5rupt_8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:dot-net"} {...others} />);
}

export default Component;
