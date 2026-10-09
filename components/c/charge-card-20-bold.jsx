import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vhgdkeb9d.css';
import '../../css/e/eosjwh5-i.css';
import '../../css/l/lghv89b9i.css';
import '../../css/g/g2bc94xrn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vhgdkeb9d"/><path class="eosjwh5-i"/><path class="lghv89b9i"/><path class="g2bc94xrn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charge-card-20-bold"} {...others} />);
}

export default Component;
