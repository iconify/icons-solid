import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u6kuu8bqa.css';
import '../../css/e/ew-iv5blf.css';
import '../../css/t/t0qjhq4fu.css';
import '../../css/o/os2k2kw7y.css';
import '../../css/m/m0pwhbb5k.css';
import '../../css/p/pf6ptbcyz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u6kuu8bqa wm-k"/><path class="ew-iv5blf wm-a"/><path class="t0qjhq4fu wm-k"/><path class="os2k2kw7y wm-a"/><path class="m0pwhbb5k wm-shadow"/><path class="pf6ptbcyz wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:panel-right-close"} {...others} />);
}

export default Component;
