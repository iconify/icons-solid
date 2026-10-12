import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h0l0t4bnd.css';
import '../../css/o/oi_p53big.css';
import '../../css/v/v7epvdjfq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h0l0t4bnd"/><path class="oi_p53big"/><path class="v7epvdjfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:test-tube-diagonal-duotone"} {...others} />);
}

export default Component;
