import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m4f-1rvaw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m4f-1rvaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:deku-tree"} {...others} />);
}

export default Component;
