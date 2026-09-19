import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0uz5ld-m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b0uz5ld-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:ball-glow"} {...others} />);
}

export default Component;
