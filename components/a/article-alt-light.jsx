import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t9de7-b_e.css';
import '../../css/h/h1_k5rbwm.css';
import '../../css/m/mn4nm1bln.css';
import '../../css/c/cr15h6-7z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t9de7-b_e"/><path class="h1_k5rbwm"/><path clip-rule="evenodd" class="mn4nm1bln"/><path class="cr15h6-7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:article-alt-light"} {...others} />);
}

export default Component;
