import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obb-habqc.css';
import '../../css/p/pb3usgw0j.css';
import '../../css/q/qaena785d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="obb-habqc"/><path class="pb3usgw0j"/><path class="qaena785d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:earth-layers-20-bold"} {...others} />);
}

export default Component;
