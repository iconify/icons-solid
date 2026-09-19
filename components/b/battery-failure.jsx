import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ezl868bnv.css';
import '../../css/o/o79l_2b7k.css';
import '../../css/m/m-x309c3o.css';
import '../../css/m/mzms04_xz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-90 14 44)" class="ezl868bnv"/><path class="o79l_2b7k"/><path class="m-x309c3o"/><path class="mzms04_xz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:battery-failure"} {...others} />);
}

export default Component;
