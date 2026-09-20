import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/w/wqfmzicbs.css';
import '../../css/u/ucieujeke.css';
import '../../css/q/q73mdkboh.css';
import '../../css/n/nt3774vdp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="wqfmzicbs"/><path class="ucieujeke"/><path class="q73mdkboh"/><path class="nt3774vdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:invision-logo"} {...others} />);
}

export default Component;
