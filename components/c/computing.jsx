import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sy8ledbqv.css';
import '../../css/n/nc_9oac_f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="sy8ledbqv"/><path class="nc_9oac_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:computing"} {...others} />);
}

export default Component;
