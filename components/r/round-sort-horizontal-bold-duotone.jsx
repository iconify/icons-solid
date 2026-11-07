import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnb90nbxf.css';
import '../../css/g/gi-oqebnd.css';
import '../../css/w/w5grt-bkg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rnb90nbxf"/><path class="gi-oqebnd"/><path class="w5grt-bkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:round-sort-horizontal-bold-duotone"} {...others} />);
}

export default Component;
