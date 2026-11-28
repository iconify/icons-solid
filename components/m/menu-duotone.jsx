import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1gljwj9g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p1gljwj9g primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:menu-duotone"} {...others} />);
}

export default Component;
