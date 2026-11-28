import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hemiprbfx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xei5bkbrz.css';
import '../../css/s/sxa77d4ni.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hemiprbfx secondary"/><g class="dt0cm9dhy primary"><path class="xei5bkbrz"/><path class="sxa77d4ni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:eject-duo"} {...others} />);
}

export default Component;
