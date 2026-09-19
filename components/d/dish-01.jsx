import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a-ewwmb-z.css';
import '../../css/k/ky2hlvb_p.css';
import '../../css/b/b5modp-te.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="a-ewwmb-z"/><path class="ky2hlvb_p"/><path class="b5modp-te"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:dish-01"} {...others} />);
}

export default Component;
