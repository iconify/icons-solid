import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-89v3b5b.css';
import '../../css/f/fjhdmsv1o.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="k-89v3b5b"/><path class="fjhdmsv1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:tag-none"} {...others} />);
}

export default Component;
