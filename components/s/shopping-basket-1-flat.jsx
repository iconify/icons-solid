import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/znccgc22v.css';
import '../../css/g/g5hn99ttr.css';
import '../../css/l/lh250zf2y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="znccgc22v"/><path class="g5hn99ttr"/><path clip-rule="evenodd" class="lh250zf2y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:shopping-basket-1-flat"} {...others} />);
}

export default Component;
