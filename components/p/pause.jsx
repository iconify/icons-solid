import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mnsm6lbre.css';
import '../../css/j/j63bdev3z.css';
import '../../css/l/lhf12v0wy.css';
import '../../css/h/hgiq1o_yl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="mnsm6lbre"/><rect class="j63bdev3z"/><rect class="lhf12v0wy"/><rect class="hgiq1o_yl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pause"} {...others} />);
}

export default Component;
