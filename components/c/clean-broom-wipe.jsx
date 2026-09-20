import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/j/j62viqdqg.css';
import '../../css/m/mwkfl3bqa.css';
import '../../css/p/pf5ms_6ak.css';
import '../../css/x/xycpfho1r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="j62viqdqg"/><path class="mwkfl3bqa"/><path class="pf5ms_6ak"/><path class="xycpfho1r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:clean-broom-wipe"} {...others} />);
}

export default Component;
