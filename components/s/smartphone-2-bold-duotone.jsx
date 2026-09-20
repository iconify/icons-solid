import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l7i1k0bst.css';
import '../../css/t/tncwp6bgy.css';
import '../../css/g/gjraafcmt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="l7i1k0bst"/><path class="tncwp6bgy"/><path class="gjraafcmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-2-bold-duotone"} {...others} />);
}

export default Component;
