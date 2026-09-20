import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ykrwmds6i.css';
import '../../css/y/ybkspvqfr.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/e/e_i_n_loy.css';
import '../../css/j/jf1-5zbft.css';
import '../../css/i/ii6geh1dw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ykrwmds6i"/><path class="ybkspvqfr"/><g class="mc2zb0bvp"><path class="e_i_n_loy"/><path class="jf1-5zbft"/><path class="ii6geh1dw"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ufo-3-bold-duotone"} {...others} />);
}

export default Component;
