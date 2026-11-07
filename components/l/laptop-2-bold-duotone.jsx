import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yr-pw-b8g.css';
import '../../css/s/s2urmqbds.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yr-pw-b8g"/><path class="s2urmqbds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:laptop-2-bold-duotone"} {...others} />);
}

export default Component;
