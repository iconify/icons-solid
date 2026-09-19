import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/crvfg_zef.css';
import '../../css/a/a30gdttzf.css';
import '../../css/b/bo93y_ztc.css';
import '../../css/s/s26qisbtl.css';
import '../../css/s/scaplnjbf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="crvfg_zef"/><path class="a30gdttzf"/><path clip-rule="evenodd" class="bo93y_ztc"/><path clip-rule="evenodd" class="s26qisbtl"/><path clip-rule="evenodd" class="scaplnjbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:hand-wipe-paper"} {...others} />);
}

export default Component;
