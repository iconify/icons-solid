import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/diwypubsb.css';
import '../../css/y/yw1m5wbef.css';
import '../../css/z/zpuo1ebll.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="diwypubsb"/><path class="yw1m5wbef"/><path class="zpuo1ebll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:currency-exchange-20"} {...others} />);
}

export default Component;
