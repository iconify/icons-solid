import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r6la0c6vv.css';
import '../../css/s/sftxd8wtz.css';
import '../../css/l/l4k2nwwaz.css';
import '../../css/o/ouzepdbve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><circle class="r6la0c6vv"/><ellipse class="sftxd8wtz"/><circle class="l4k2nwwaz"/><ellipse class="ouzepdbve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:users-duotone"} {...others} />);
}

export default Component;
