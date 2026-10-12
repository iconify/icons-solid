import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p83bk88lo.css';
import '../../css/y/ytnnfb2fz.css';
import '../../css/l/lts-c-4mj.css';
import '../../css/f/fc2ab0bzs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p83bk88lo"/><path class="ytnnfb2fz"/><path class="lts-c-4mj"/><path class="fc2ab0bzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-background-sparkle"} {...others} />);
}

export default Component;
