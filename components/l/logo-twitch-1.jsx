import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h20g7xb6e.css';
import '../../css/o/o557kdpvn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="h20g7xb6e"/><path class="o557kdpvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:logo-twitch-1"} {...others} />);
}

export default Component;
