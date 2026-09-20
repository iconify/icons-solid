import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l1_8rjblk.css';
import '../../css/d/d2wh2lzqg.css';
import '../../css/o/o8pclmswx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="l1_8rjblk"/><path class="d2wh2lzqg"/><path class="o8pclmswx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:campfire"} {...others} />);
}

export default Component;
