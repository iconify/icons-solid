import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/thvrl_b5e.css';
import '../../css/m/mkdyumbaw.css';
import '../../css/z/zv_vmr3ox.css';
import '../../css/l/lcatu8byl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="thvrl_b5e wm-shadow"/><path class="mkdyumbaw wm-shadow"/><path class="zv_vmr3ox"/><path class="lcatu8byl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:lock-keyhole"} {...others} />);
}

export default Component;
