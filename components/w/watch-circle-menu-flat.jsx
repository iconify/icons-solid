import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_x99jnku.css';
import '../../css/w/wmren7puh.css';
import '../../css/c/cpmb4rbup.css';
import '../../css/z/zyxdqibuv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="n_x99jnku"/><path clip-rule="evenodd" class="wmren7puh"/><path clip-rule="evenodd" class="cpmb4rbup"/><path class="zyxdqibuv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:watch-circle-menu-flat"} {...others} />);
}

export default Component;
