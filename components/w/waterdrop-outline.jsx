import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uskchin6p.css';
import '../../css/r/rij0rxuxr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uskchin6p"/><path clip-rule="evenodd" class="rij0rxuxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:waterdrop-outline"} {...others} />);
}

export default Component;
