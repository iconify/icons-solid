import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_-gkxb7l.css';
import '../../css/v/veswyuvld.css';
import '../../css/v/vppvk20zr.css';
import '../../css/j/jn-g1r18l.css';
import '../../css/y/ymhw5acja.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b_-gkxb7l"/><path class="veswyuvld"/><path class="vppvk20zr"/><rect transform="rotate(-45 31.28 -16)scale(1 -1)" class="jn-g1r18l"/><path class="ymhw5acja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-edit"} {...others} />);
}

export default Component;
