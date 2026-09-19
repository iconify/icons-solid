import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/obsjfkxrf.css';
import '../../css/o/o-5y5_bpo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="obsjfkxrf"/><path class="o-5y5_bpo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:battery-charging"} {...others} />);
}

export default Component;
