import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gv4k0-y3b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gv4k0-y3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:tree-roots"} {...others} />);
}

export default Component;
