import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mglbirb9o.css';
import '../../css/e/eu46usfmp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mglbirb9o"/><path clip-rule="evenodd" class="eu46usfmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:comment-1-text"} {...others} />);
}

export default Component;
