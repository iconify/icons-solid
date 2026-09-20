import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xjdos9exn.css';
import '../../css/o/ohpbju5jc.css';
import '../../css/d/dag-dkc4k.css';
import '../../css/y/yogb4gebd.css';
import '../../css/s/s5kxay-fy.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="xjdos9exn"/><path class="ohpbju5jc"/><path class="dag-dkc4k"/><path class="yogb4gebd"/><path class="s5kxay-fy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:music-basket"} {...others} />);
}

export default Component;
