import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cd42r404p.css';
import '../../css/k/kigsbgfya.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cd42r404p"/><path class="kigsbgfya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:misuse-alt"} {...others} />);
}

export default Component;
