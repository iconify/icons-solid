import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jsd5p2bkd.css';
import '../../css/c/cr7efcbob.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/c/cb-t85bmb.css';
import '../../css/a/ajrx2wbff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="jsd5p2bkd wm-deco"/><path class="cr7efcbob wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="cb-t85bmb"/><path class="ajrx2wbff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:power-blueprint"} {...others} />);
}

export default Component;
