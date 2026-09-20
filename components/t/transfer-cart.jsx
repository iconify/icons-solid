import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u59_y7bnt.css';
import '../../css/c/c6x08t_hq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="u59_y7bnt"/><path class="c6x08t_hq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:transfer-cart"} {...others} />);
}

export default Component;
