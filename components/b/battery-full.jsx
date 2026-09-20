import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nbxszfrsi.css';
import '../../css/m/m1ye8t31x.css';
import '../../css/k/kxw7_zabv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="nbxszfrsi"/><rect class="m1ye8t31x"/><path class="kxw7_zabv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:battery-full"} {...others} />);
}

export default Component;
