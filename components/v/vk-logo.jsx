import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a7s4jsrmf.css';
import '../../css/w/w6i3edcxc.css';
import '../../css/m/m-1p_gxft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a7s4jsrmf"/><path class="w6i3edcxc"/><path class="m-1p_gxft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:vk-logo"} {...others} />);
}

export default Component;
