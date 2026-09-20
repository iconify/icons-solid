import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wy-vytlwd.css';
import '../../css/h/hs0-l3b6r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wy-vytlwd"/><path class="hs0-l3b6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:signin-alt-duotone"} {...others} />);
}

export default Component;
