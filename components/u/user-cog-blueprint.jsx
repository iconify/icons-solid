import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/ounuhul-g.css';
import '../../css/z/z972s-b0h.css';
import '../../css/g/gq5wgor7s.css';
import '../../css/d/dhjxlpbbc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ounuhul-g wm-deco"/><path class="wm-deco z972s-b0h"/><path class="gq5wgor7s wm-k"/><path class="dhjxlpbbc wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-cog-blueprint"} {...others} />);
}

export default Component;
