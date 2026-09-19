import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxm9r3d5g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oxm9r3d5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:infested-mass"} {...others} />);
}

export default Component;
