import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mz_y3i_1u.css';
import '../../css/r/rdo_dm05s.css';
import '../../css/c/cz43h6s9e.css';
import '../../css/r/r4_q9ibbw.css';
import '../../css/y/ysahmwb9r.css';
import '../../css/a/av0z74b1r.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/v6v7y3bdc.css';
import '../../css/w/wgi0o5h_j.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="mz_y3i_1u"/><path class="rdo_dm05s"/><path class="cz43h6s9e"/><path class="r4_q9ibbw"/><path class="ysahmwb9r"/><path class="av0z74b1r"/><g class="jn8qy4bru"><path class="v6v7y3bdc"/><path class="wgi0o5h_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:nuclear-power-plant"} {...others} />);
}

export default Component;
