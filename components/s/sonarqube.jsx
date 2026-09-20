import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cg4z4ibau.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dc-ewac4p.css';
import '../../css/f/f4rk02bgm.css';
import '../../css/p/pgbhdkbup.css';
import '../../css/w/wyv0q7ulp.css';

const viewBox = {"width":99,"height":91};
const content = `<mask id="SVGbBHYdckz" width="99" height="91" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path class="cg4z4ibau"/></mask><g mask="url(#SVGbBHYdckz)" class="ft5dv1b6b"><path class="dc-ewac4p"/><path class="f4rk02bgm"/><path class="pgbhdkbup"/><path class="wyv0q7ulp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:sonarqube"} {...others} />);
}

export default Component;
