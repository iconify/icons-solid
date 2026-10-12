import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gsr2r2a3d.css';
import '../../css/v/v59nqtkpi.css';
import '../../css/a/a67w5majz.css';
import '../../css/j/jct5gxc9y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gsr2r2a3d"/><path class="v59nqtkpi"/><path class="a67w5majz"/><path class="jct5gxc9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:van-duotone"} {...others} />);
}

export default Component;
