import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q9m10z9mv.css';
import '../../css/x/x8l63nn9u.css';
import '../../css/z/z5x0vkblk.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="q9m10z9mv"/><path clip-rule="evenodd" class="x8l63nn9u"/><path class="z5x0vkblk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:bug-flat"} {...others} />);
}

export default Component;
