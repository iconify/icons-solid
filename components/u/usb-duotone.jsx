import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/swsab_86e.css';
import '../../css/n/ng521n2fi.css';
import '../../css/t/th7pbs4yu.css';
import '../../css/o/oyqurmbjm.css';
import '../../css/e/eftk9lbjg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><circle class="swsab_86e"/><circle class="ng521n2fi"/><path clip-rule="evenodd" class="th7pbs4yu"/><path class="oyqurmbjm"/><path class="eftk9lbjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:usb-duotone"} {...others} />);
}

export default Component;
