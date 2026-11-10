import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o0b-gfgpz.css';
import '../../css/z/zf5bh8bck.css';
import '../../css/n/n-15edb1s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o0b-gfgpz"/><path class="zf5bh8bck"/><path class="n-15edb1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-sparkle"} {...others} />);
}

export default Component;
