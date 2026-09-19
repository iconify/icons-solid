import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f88q_7b9p.css';
import '../../css/b/bkdyu3kxb.css';
import '../../css/g/gm_nkzbxx.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="f88q_7b9p"/><path clip-rule="evenodd" class="bkdyu3kxb"/><path class="gm_nkzbxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:firewall"} {...others} />);
}

export default Component;
