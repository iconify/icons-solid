import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lb3tuvb1c.css';
import '../../css/n/nk_brl4au.css';
import '../../css/w/wyduebbnc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lb3tuvb1c"/><path class="nk_brl4au"/><path class="wyduebbnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:remove-bold"} {...others} />);
}

export default Component;
