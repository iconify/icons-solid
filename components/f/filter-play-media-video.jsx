import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o_r0h8b-f.css';
import '../../css/x/xb09bq79u.css';
import '../../css/c/c5osqbspf.css';
import '../../css/w/wjm0u0s-g.css';
import '../../css/q/qaojfdcft.css';
import '../../css/p/pzq6icbhl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o_r0h8b-f"/><path class="xb09bq79u"/><path class="c5osqbspf"/><path class="wjm0u0s-g"/><path class="qaojfdcft"/><path class="pzq6icbhl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:filter-play-media-video"} {...others} />);
}

export default Component;
