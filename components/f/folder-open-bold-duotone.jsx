import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j92jx1bzk.css';
import '../../css/a/atm69obhq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j92jx1bzk"/><path class="atm69obhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-open-bold-duotone"} {...others} />);
}

export default Component;
