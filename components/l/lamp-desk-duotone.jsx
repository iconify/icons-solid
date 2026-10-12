import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m578dxb1e.css';
import '../../css/m/mlhz2kbie.css';
import '../../css/k/kocu-gbtd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m578dxb1e"/><path class="mlhz2kbie"/><path class="kocu-gbtd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:lamp-desk-duotone"} {...others} />);
}

export default Component;
