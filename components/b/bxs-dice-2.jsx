import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p9vm4ubfw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p9vm4ubfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-dice-2"} {...others} />);
}

export default Component;
