import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rg7bucc1h.css';
import '../../css/c/c9uff_rkf.css';
import '../../css/v/vn4t1bcsj.css';
import '../../css/x/x_-029b8v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rg7bucc1h"/><path clip-rule="evenodd" class="c9uff_rkf"/><path class="vn4t1bcsj"/><path class="x_-029b8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:list-refresh"} {...others} />);
}

export default Component;
