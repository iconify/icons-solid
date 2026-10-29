import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/eetvi_tkn.css';
import '../../css/h/hkji04b7m.css';
import '../../css/d/dz2mo0bsx.css';
import '../../css/e/eoj5bbr0o.css';
import '../../css/h/h05f-pbzh.css';
import '../../css/h/hp7trpb9d.css';
import '../../css/s/ssnwv-mhx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="eetvi_tkn wm-deco"/><path class="hkji04b7m wm-deco"/><path class="dz2mo0bsx wm-deco"/><path class="eoj5bbr0o wm-k"/><path class="h05f-pbzh wm-a"/><path class="hp7trpb9d wm-k"/><path class="ssnwv-mhx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tooth-crown-blueprint"} {...others} />);
}

export default Component;
