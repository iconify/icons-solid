import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lqasnxb9d.css';
import '../../css/f/fxii5_bsg.css';
import '../../css/a/ac_65uciq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lqasnxb9d"/><path class="fxii5_bsg"/><circle class="ac_65uciq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:cash-sharp"} {...others} />);
}

export default Component;
