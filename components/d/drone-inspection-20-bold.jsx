import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pm9mbi_na.css';
import '../../css/o/ocfy37bnq.css';
import '../../css/e/edls71zqh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pm9mbi_na"/><path class="ocfy37bnq"/><path class="edls71zqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drone-inspection-20-bold"} {...others} />);
}

export default Component;
