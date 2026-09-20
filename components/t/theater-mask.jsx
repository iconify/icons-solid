import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p6wsf9bod.css';
import '../../css/x/x23wg-blv.css';
import '../../css/z/zqn5c1w6w.css';
import '../../css/b/bc9np79cj.css';
import '../../css/z/zsyj5hbab.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p6wsf9bod"/><path class="x23wg-blv"/><path class="zqn5c1w6w"/><path class="bc9np79cj"/><path class="zsyj5hbab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:theater-mask"} {...others} />);
}

export default Component;
