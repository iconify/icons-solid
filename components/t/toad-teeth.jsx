import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z66tl_b8p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z66tl_b8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:toad-teeth"} {...others} />);
}

export default Component;
