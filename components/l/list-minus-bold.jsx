import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l4sq9d0tz.css';
import '../../css/c/cns4gdb7a.css';
import '../../css/x/xr94vgbux.css';
import '../../css/m/m86y5nxtn.css';
import '../../css/f/f-ijm0bse.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="l4sq9d0tz"/><path class="cns4gdb7a"/><path class="xr94vgbux"/><path class="m86y5nxtn"/><path class="f-ijm0bse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-minus-bold"} {...others} />);
}

export default Component;
