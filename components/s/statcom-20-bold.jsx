import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qoecip_zs.css';
import '../../css/u/u-2khd52i.css';
import '../../css/v/vysp5-ryk.css';
import '../../css/o/oheu1iy3h.css';
import '../../css/t/tspxr7b8c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qoecip_zs"/><path class="u-2khd52i"/><path class="vysp5-ryk"/><path class="oheu1iy3h"/><path class="tspxr7b8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:statcom-20-bold"} {...others} />);
}

export default Component;
