import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gnvq9ycaz.css';
import '../../css/y/ym658y2kh.css';
import '../../css/n/nsz51i0oo.css';
import '../../css/c/c__hu_bvj.css';
import '../../css/x/x6_m7jbzc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gnvq9ycaz"/><path class="ym658y2kh"/><path class="nsz51i0oo"/><path class="c__hu_bvj"/><path class="x6_m7jbzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:users-plus"} {...others} />);
}

export default Component;
