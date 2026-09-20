import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l60g_u.css';
import '../../css/d/d-opowom.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l60g_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:twitter-x-alt"} {...others} />);
}

export default Component;
