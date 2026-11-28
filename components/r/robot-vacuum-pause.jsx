import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tph2u6z3a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tph2u6z3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:robot-vacuum-pause"} {...others} />);
}

export default Component;
