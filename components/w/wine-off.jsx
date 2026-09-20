import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rm-l3gteu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rm-l3gteu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:wine-off"} {...others} />);
}

export default Component;
