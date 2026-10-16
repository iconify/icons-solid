import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k32gpe-6w.css';
import '../../css/u/uq2goxbcr.css';
import '../../css/c/csv0x4boa.css';
import '../../css/v/vny9clrdu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k32gpe-6w"/><path class="uq2goxbcr"/><path class="csv0x4boa"/><path class="vny9clrdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:org-chart-20"} {...others} />);
}

export default Component;
