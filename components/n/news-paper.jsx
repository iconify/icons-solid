import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zwhw-10ob.css';
import '../../css/c/chaahbcfj.css';
import '../../css/l/lmh-jnsnw.css';
import '../../css/e/eo5zdablv.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="zwhw-10ob"/><path clip-rule="evenodd" class="chaahbcfj"/><path class="lmh-jnsnw"/><path class="eo5zdablv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:news-paper"} {...others} />);
}

export default Component;
