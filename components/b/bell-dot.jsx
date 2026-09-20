import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bxu-ixbxe.css';
import '../../css/v/v8vm-z-vm.css';
import '../../css/x/xwni9mcbw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bxu-ixbxe"/><path class="v8vm-z-vm"/><circle class="xwni9mcbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:bell-dot"} {...others} />);
}

export default Component;
