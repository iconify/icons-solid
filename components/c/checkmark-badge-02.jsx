import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/husatjbjt.css';
import '../../css/w/w8mw4p1vn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="husatjbjt"/><path class="w8mw4p1vn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:checkmark-badge-02"} {...others} />);
}

export default Component;
