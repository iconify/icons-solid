import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/drg7l01fx.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/m/mv85hfbyp.css';
import '../../css/f/fnudiubft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="drg7l01fx wm-deco"/><path class="sdaucgb_l wm-deco"/><path class="mv85hfbyp wm-k"/><path class="fnudiubft wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:passport-blueprint"} {...others} />);
}

export default Component;
