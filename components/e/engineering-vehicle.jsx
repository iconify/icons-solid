import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/j850wac-i.css';
import '../../css/u/u_haqyhvf.css';
import '../../css/z/zrt4urc1f.css';
import '../../css/z/zsrvp_b7g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="j850wac-i"/><path class="u_haqyhvf"/><circle class="zrt4urc1f"/><circle class="zsrvp_b7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:engineering-vehicle"} {...others} />);
}

export default Component;
