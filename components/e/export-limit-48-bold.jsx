import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tl_of99ub.css';
import '../../css/a/a81jttbcu.css';
import '../../css/l/lh_ofmq9u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tl_of99ub"/><path class="a81jttbcu"/><path class="lh_ofmq9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:export-limit-48-bold"} {...others} />);
}

export default Component;
