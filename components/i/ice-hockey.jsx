import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/kw56s29xw.css';
import '../../css/c/c-gz8da_u.css';
import '../../css/k/kxufwstrq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="kw56s29xw"/><path class="c-gz8da_u"/><path class="kxufwstrq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ice-hockey"} {...others} />);
}

export default Component;
