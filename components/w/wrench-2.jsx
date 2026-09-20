import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itpgybcop.css';
import '../../css/i/i12mzo0_i.css';
import '../../css/f/fbqdtzb5b.css';
import '../../css/n/nuci8-byu.css';
import '../../css/e/epjzn8b9p.css';
import '../../css/a/ap3e_53xy.css';
import '../../css/p/pwyyfjm-u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="itpgybcop"/><path class="i12mzo0_i"/><path class="fbqdtzb5b"/><path class="nuci8-byu"/><path class="epjzn8b9p"/><path class="ap3e_53xy"/><path class="pwyyfjm-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:wrench-2"} {...others} />);
}

export default Component;
