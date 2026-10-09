import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ksqnkb31x.css';
import '../../css/p/pam77ibjf.css';
import '../../css/p/paihgnbuy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ksqnkb31x"/><path class="pam77ibjf"/><path class="paihgnbuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-train-20-bold"} {...others} />);
}

export default Component;
