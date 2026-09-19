import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bj2i5ybtg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bj2i5ybtg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:nun-face"} {...others} />);
}

export default Component;
