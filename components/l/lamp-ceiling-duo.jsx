import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yf4c73b8m.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mg0ugob5a.css';
import '../../css/g/gcq-pnbnm.css';
import '../../css/m/mebfxw_io.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary yf4c73b8m"/><g class="dt0cm9dhy primary"><path class="mg0ugob5a"/><path class="gcq-pnbnm"/><path class="mebfxw_io"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:lamp-ceiling-duo"} {...others} />);
}

export default Component;
