import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xps_-5liz.css';
import '../../css/n/nkxy9-bnh.css';
import '../../css/e/erh5bpaaj.css';
import '../../css/j/juyu1-btb.css';
import '../../css/p/phaw59bsh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="xps_-5liz"/><path class="nkxy9-bnh"/><path class="erh5bpaaj"/><path class="juyu1-btb"/><path class="phaw59bsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:lighter-duo"} {...others} />);
}

export default Component;
