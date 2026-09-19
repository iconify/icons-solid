import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mx9n3yb_i.css';
import '../../css/k/k0hfabcko.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="mx9n3yb_i"/><path class="k0hfabcko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mouse-18"} {...others} />);
}

export default Component;
