import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wy0t6ac2f.css';
import '../../css/m/m3biyk1pf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wy0t6ac2f"/><path class="m3biyk1pf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:racket-ball-duotone"} {...others} />);
}

export default Component;
