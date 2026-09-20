import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/py7ktqbvf.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ek1xc_qca.css';
import '../../css/x/xj83kubla.css';
import '../../css/b/bc2-7ibpv.css';
import '../../css/r/r9cjbb_3z.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGNj8XZdDN" width="24" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path class="py7ktqbvf"/></mask><g mask="url(#SVGNj8XZdDN)" class="ft5dv1b6b"><path class="ek1xc_qca"/><path class="xj83kubla"/><path class="bc2-7ibpv"/><path class="r9cjbb_3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:megaman"} {...others} />);
}

export default Component;
