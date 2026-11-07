import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/co9si1b_r.css';
import '../../css/a/ansfvlgtt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="co9si1b_r"/><path class="ansfvlgtt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-horizontal-spacing-bold"} {...others} />);
}

export default Component;
