import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/af8sc-fzp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="af8sc-fzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:small-fire"} {...others} />);
}

export default Component;
