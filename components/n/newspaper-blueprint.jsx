import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/tar18rbeo.css';
import '../../css/w/wr92o1bsm.css';
import '../../css/o/o---ur47v.css';
import '../../css/w/wt4fzw49e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="tar18rbeo wm-deco"/><path class="wm-deco wr92o1bsm"/><path class="o---ur47v wm-k"/><path class="wm-a wt4fzw49e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:newspaper-blueprint"} {...others} />);
}

export default Component;
