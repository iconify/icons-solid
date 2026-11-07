import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2j11xx0i.css';
import '../../css/f/ft03l-j3k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="f2j11xx0i"/><path class="ft03l-j3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:buildings-bold-duotone"} {...others} />);
}

export default Component;
