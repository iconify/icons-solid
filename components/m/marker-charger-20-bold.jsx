import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hei8_htdz.css';
import '../../css/t/tyrfmtb0m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hei8_htdz"/><path class="tyrfmtb0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:marker-charger-20-bold"} {...others} />);
}

export default Component;
