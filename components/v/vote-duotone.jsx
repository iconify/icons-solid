import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lbuo8x34l.css';
import '../../css/k/kfkatubxd.css';
import '../../css/h/h56p5miuc.css';
import '../../css/l/l5p2-czkg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lbuo8x34l"/><path class="kfkatubxd"/><path class="h56p5miuc"/><path class="l5p2-czkg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:vote-duotone"} {...others} />);
}

export default Component;
