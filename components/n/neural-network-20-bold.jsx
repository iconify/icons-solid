import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0hjvvbvq.css';
import '../../css/f/fog6_ccbu.css';
import '../../css/y/ynhsshwyx.css';
import '../../css/e/ejmd5dbpy.css';
import '../../css/m/mhidyebhu.css';
import '../../css/o/ovkk1o8-y.css';
import '../../css/u/uhe-plb5n.css';
import '../../css/f/fq5wudbiv.css';
import '../../css/n/nu307ygdc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n0hjvvbvq"/><path class="fog6_ccbu"/><path class="ynhsshwyx"/><path class="ejmd5dbpy"/><path class="mhidyebhu"/><path class="ovkk1o8-y"/><path class="uhe-plb5n"/><path class="fq5wudbiv"/><path class="nu307ygdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:neural-network-20-bold"} {...others} />);
}

export default Component;
